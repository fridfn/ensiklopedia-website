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
import PagesList from '@/pages/dinosaurus/PagesList';
import DetailPages from '@/pages/dinosaurus/DetailPages';


function App() {
   if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js', {scope: '/'})
      .then((registration) => {
        console.log('Service Worker registered with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed: ', error);
      });
    });
   }
   
   AOS.init({ duration: '1200', once: true});
   
  return (
   <div>
    <Router>
     <Routes>
      <Route path='/' element={<LoadingPage />} />
      <Route path='/home' element={<LandingPage />} />
      <Route path='/home/dinosaurus/pages/:pageNumber' element={<PagesList />} />
      <Route path='/home/dinosaurus/details/:species' element={<DetailPages />} />
      <Route path='*' element={<NotFound />} />
     </Routes>
    </Router>
   </div>
  )
}

export default App;
