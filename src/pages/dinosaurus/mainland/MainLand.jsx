import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '@/global.css';
import '@/styles/App.scss';
import Header from '@/components/layout/header';
import Loaders from '@/components/common/Loading';
import List from '@/components/layout/list';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/Sidebar';
import useDelayedItems from '@/features/utils/useDelayedItems';
import getPaginatedList from '@/features/utils/usePaginationLimit';

const MainLand = () => {
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const [visible, setVisible] = useState(3);
  const [dinosaurus, setDinosaurus] = useState([]);
  
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
    }, 6000);
   }).catch(error => console.log('broken api', error))
  }, [])
  
  const visibleDino = useDelayedItems(dinosaurus, 1500);
  
  const paginatedItems = getPaginatedList(currentPage, pageNumber, dinoPerPages, dinosaurus);
  
  const showListAndNavigate = (pageNumber)=> {
    const nextPage = parseInt(pageNumber, 10) + 1;
    if (currentPage < totalPages) {
     navigate(`/home/dinosaurus/pages/${nextPage}`);
    }
  }
  
  return (
    <>
     <div className="container">
      <Header />
      <Sidebar />
       <section>
         {visibleDino.length > 0 ? (
           paginatedItems.map((dino, index) =>
            <List key={index} dinosaurus={dino.nama} periode={dino.periode} deskripsi={dino.deskripsi} lokasi={dino.lokasi_fosil}/>
           )
          ) : (<Loaders />)
         }
         {visible < dinosaurus.length && (
        <button onClick={() => showListAndNavigate(pageNumber)} disabled={currentPage >= totalPages} className="tiny-bold">NEXT PAGE</button>)}
       </section>
      <Navbar />
     </div>
    </>
  )
}

export default MainLand;