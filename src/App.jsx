import '@/styles/components.css'
import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteTemplate from '@/routes/routesTemplate';
import MainPage from '@/pages/main/MainPage.jsx';
import TriassicPage from '@/pages/prehistoric/triassic/TriassicPage';
import JurassicPage from '@/pages/prehistoric/jurassic/JurassicPage';
import CretaceusPage from '@/pages/prehistoric/cretaceus/CretaceusPage';
import NotFound from '@/pages/main/NotFound';

function App() {
  return (
   <div>
   
    <Router>
     <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/cretaceus' element={<CretaceusPage />} />
      <Route path='/jurassic' element={<JurassicPage />} />
      <Route path='/triassic' element={<TriassicPage />} />
     </Routes>
    </Router>
   </div>
  )
}

export default App;
