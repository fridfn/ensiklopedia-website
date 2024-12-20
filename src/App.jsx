import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/App.scss';
import '@/styles/Pseudo.scss';
import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '@/pages/main/LandingPage';
import NotFound from '@/pages/main/NotFound';
import LoadingPage from '@/pages/main/LoadingPage';
import MainLand from '@/pages/dinosaurus/MainLand';
import DetailPages from '@/pages/dinosaurus/DetailPages';


function App() {
   if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed: ', error);
      });
    });
   }
   
   AOS.init();
   
  return (
   <div>
    <Router>
     <Routes>
      <Route path='/' element={<LoadingPage />} />
      <Route path='/landing' element={<LandingPage />} />
      <Route path='/home/dinosaurus/pages/:pageNumber' element={<MainLand />} />
      <Route path='/home/dinosaurus/details/:species' element={<DetailPages />} />
      <Route path='*' element={<NotFound />} />
     </Routes>
    </Router>
   </div>
  )
}

export default App;
