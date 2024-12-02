import React, { useState, useEffect } from 'react';
import '@/global.css';
import '@/styles/components.css';
import Header from '@/components/layout/header';
import List from '@/components/layout/list';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/Sidebar';

const MainPage = () => {
  return (
    <>
     <div className="container">
      <Header />
      <Sidebar />
       <section>
         <List />
         <List />
         <List />
         <List />
       </section>
      <Navbar />
     </div>
    </>
  )
}

export default MainPage;