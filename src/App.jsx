import '@/styles/App.scss';
import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import RouteTemplate from '@/routes/routesTemplate';
import LandingPage from '@/pages/main/LandingPage';
import TriassicPage from '@/pages/prehistoric/triassic/TriassicPage';
import JurassicPage from '@/pages/prehistoric/jurassic/JurassicPage';
import CretaceusPage from '@/pages/prehistoric/cretaceus/CretaceusPage';
import NotFound from '@/pages/main/NotFound';
import LoadingPage from '@/pages/main/LoadingPage';
import MainLand from '@/pages/dinosaurus/mainland/MainLand';

function App() {
  return (
   <div>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LoadingPage />} />
      <Route path='/landing' element={<LandingPage />} />
      <Route path='/home/dinosaurus/pages/:pageNumber' element={<MainLand />} />
      <Route path='/cretaceus' element={<CretaceusPage />} />
      <Route path='/jurassic' element={<JurassicPage />} />
      <Route path='/triassic' element={<TriassicPage />} />
      <Route path='*' element={<NotFound />} />
     </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App;
