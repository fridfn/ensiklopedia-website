import '@/styles/App.scss';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Loaders from '@/components/common/Loading';
import ButtonPagination from '@/components/common/ButtonPagination';
import List from '@/components/layout/list';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/Sidebar';
import NotFound from '@/pages/main/NotFound';
import useDelayedItems from '@/features/utils/useDelayedItems';
import getPaginatedList from '@/features/utils/usePaginationLimit';
import ParticlesComponent from '@/features/particles/ParticlesComponent';
import fetchDinosaurus from '@/features/hooks/fetchDinosaurus';

const PagesList = () => {
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const [error, setError] = useState(null);
  const [dinosaurus, setDinosaurus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const dinoPerPages = 4;
  const currentPage = parseInt(pageNumber, 10) || 1;
  const totalPages = Math.ceil(dinosaurus.length / dinoPerPages);
  
  useEffect(() => {
   fetchDinosaurus(setDinosaurus, setIsLoading, setError, 5000);
  }, [currentPage]);
  
  const paginatedItems = getPaginatedList(currentPage, pageNumber, dinoPerPages, dinosaurus);
  const iconButton = ['search-sharp', 'options']
  
  if (isNaN(pageNumber) || currentPage > totalPages || pageNumber <= 0) {
   if (!isLoading) {
     return ( <NotFound /> );
   }
  }
  
  return (
    <>
     <div className="container">
     <ParticlesComponent icons="🍀" />
      <Header button={iconButton} title="Ensiklopedia" />
      <Sidebar />
       <section>
         {!isLoading ? (
          <>
           {paginatedItems.map(({ nama, periode, deskripsi, lokasi_fosil }, index) => (
           <List
             key={index}
             dinosaurus={nama}
             periode={periode}
             deskripsi={deskripsi}
             lokasi={lokasi_fosil}
           />
           ))}
           
           <ButtonPagination
             pageNumber={pageNumber} 
             currentPage={currentPage} 
             totalPages={totalPages}
           />
          </>
          ) : (<Loaders type="gif" />) }
       </section>
      <Navbar />
     </div>
    </>
  )
}

export default PagesList;