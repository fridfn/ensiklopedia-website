import '@/styles/App.scss';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Loaders from '@/components/common/Loading';
import ButtonPagination from '@/components/common/ButtonPagination';
import List from '@/components/layout/list';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/Sidebar';
import useDelayedItems from '@/features/utils/useDelayedItems';
import getPaginatedList from '@/features/utils/usePaginationLimit';
import ParticlesComponent from '@/features/particles/ParticlesComponent';
import fetchDinosaurus from '@/features/hooks/fetchDinosaurus';

const MainLand = () => {
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(3);
  const [dinosaurus, setDinosaurus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const dinoPerPages = 4;
  const totalPages = Math.ceil(dinosaurus.length / dinoPerPages);
  const currentPage = parseInt(pageNumber, 10) || 1;
  
  useEffect(() => {
   fetchDinosaurus(setDinosaurus, setIsLoading, setError);
  }, [currentPage]);
  
  const paginatedItems = getPaginatedList(currentPage, pageNumber, dinoPerPages, dinosaurus);
  const iconButton = ['search-sharp', 'options']
  
  return (
    <>
     <div className="container">
      <Header button={iconButton} title="Ensiklopedia" />
      <Sidebar />
       <section>
         {!isLoading ? (
          <>
           <ParticlesComponent icons="🍀"/>
           {paginatedItems.map((dino, index) => (
           <List
            key={index}
            dinosaurus={dino.nama}
            periode={dino.periode}
            deskripsi={dino.deskripsi}
            lokasi={dino.lokasi_fosil}
           />
           ))}
           
           <ButtonPagination 
            pageNumber={pageNumber} 
            currentPage={currentPage} 
            totalPages={totalPages}
           />
          </>
          ) : (<Loaders event="blur" />) }
       </section>
      <Navbar />
     </div>
    </>
  )
}

export default MainLand;