import React, { useState, useEffect } from 'react';
import '@/global.css';
import '@/styles/App.scss';
import Header from '@/components/layout/header';
import Loaders from '@/components/common/Loading';
import List from '@/components/layout/list';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/Sidebar';
import useDelayedItems from '@/features/utils/useDelayedItems'

const MainPage = () => {
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
  
  const visibleDino = useDelayedItems(dinosaurus, 1000);
  
  
  return (
    <>
     <div className="container">
      <Header />
      <Sidebar />
       <section>
         {visibleDino.length > 0 ? (
           visibleDino.map((dino, index) => 
            <List key={index} dinosaurus={dino.nama} periode={dino.periode} deskripsi={dino.deskripsi} lokasi={dino.lokasi_fosil}/>
           )
          ) : (
           <Loaders />
          )
         }
       </section>
      <Navbar />
     </div>
    </>
  )
}

export default MainPage;