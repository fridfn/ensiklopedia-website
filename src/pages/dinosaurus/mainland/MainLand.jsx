import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '@/styles/App.scss';
import Header from '@/components/layout/header';
import Loaders from '@/components/common/Loading';
import ButtonPagination from '@/components/common/ButtonPagination';
import List from '@/components/layout/list';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/Sidebar';
import useDelayedItems from '@/features/utils/useDelayedItems';
import getPaginatedList from '@/features/utils/usePaginationLimit';
import ParticlesComponent from '@/features/particles/ParticlesComponent';

const MainLand = () => {
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const [visible, setVisible] = useState(3);
  const [dinosaurus, setDinosaurus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const dinoPerPages = 2;
  const totalPages = Math.ceil(dinosaurus.length / dinoPerPages);
  const currentPage = parseInt(pageNumber, 10) || 1;
  
  useEffect(() => {
   fetch('/API/dinosaurs.json')
   .then(response => {
     if(!response.ok) {
      throw new Error('Jaringan ke API buruk')
     }
     return response.json();
   })
   .then(data => {
    setTimeout(() => {
     setDinosaurus(data.dinosaurs)
    }, 3000);
   }).catch(error => console.log('broken api', error))
  }, [])
  
  const paginatedItems = getPaginatedList(currentPage, pageNumber, dinoPerPages, dinosaurus);
  
  const visibleDino = useDelayedItems(dinosaurus, 0);
  return (
    <>
     <div className="container">
      <Header />
      <Sidebar />
      <ParticlesComponent />
       <section>
         {visibleDino.length > 0 ? (
           paginatedItems.map((dino, index) =>
            <List key={index} dinosaurus={dino.nama} periode={dino.periode} deskripsi={dino.deskripsi} lokasi={dino.lokasi_fosil}/>
           )
          ) : (<Loaders />)
         }
         {visible < dinosaurus.length && (
          <ButtonPagination pageNumber={pageNumber} currentPage={currentPage} totalPages={totalPages} />
        )}
       </section>
      <Navbar />
     </div>
    </>
  )
}

export default MainLand;