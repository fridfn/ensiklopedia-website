import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '@/styles/App.scss';
import Header from '@/components/layout/header';
import Loaders from '@/components/common/Loading';
import List from '@/components/layout/list';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/Sidebar';
import useDelayedItems from '@/features/utils/useDelayedItems';
import useLimit from '@/features/utils/usePaginationLimit';

const MainPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(3);
  const [dinosaurus, setDinosaurus] = useState([]);
  
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
    }, 10000);
   }).catch(error => console.log('broken api', error))
  }, [])
  
  const visibleDino = useDelayedItems(dinosaurus, 1500);
  
  const showMore = () => {
   const increment = 3;
   
   setVisible(prevVisible => {
    const newVisible = Math.min(prevVisible + increment, dinosaurus.length);
    
    if (newVisible > prevVisible) {
     const newPageNumber = Math.ceil(newVisible / increment);
     navigate(`/home/dinosaurus/pages=${newPageNumber}`);
    }
    return newVisible;
   })
  }
  
  return (
    <>
     <div className="container">
      <Header />
      <Sidebar />
       <section>
         {visibleDino.length > 0 ? (
           useLimit(visibleDino, visible).map((dino, index) => 
            <List key={index} dinosaurus={dino.nama} periode={dino.periode} deskripsi={dino.deskripsi} lokasi={dino.lokasi_fosil}/>
           )
          ) : ( <Loaders /> )
         }
         {visible < dinosaurus.length && (
        <button onClick={() => showMore()}>testtt</button>)}
       </section>
      <Navbar />
     </div>
    </>
  )
}

export default MainPage;