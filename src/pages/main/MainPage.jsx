import React, { useState, useEffect } from 'react';
import '@/global.css';
import '@/styles/components.css';
import Header from '@/components/layout/header';
import List from '@/components/layout/list';
import Navbar from '@/components/layout/navbar';
import Loading from '@/components/layout/loading';


const MainPage = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
   setTimeout(() => {
    setLoading(false)
   }, 150);
  }, []);
  return (
   <>
    <div className="container">
     {loading ? (
       <Loading />
     ) : (
       <>
         <Header />
         <section>
           <List />
           <List />
           <List />
           <List />
         </section>
         <Navbar />
       </>
     )}
   </div>
  </>
  )
}

export default MainPage;