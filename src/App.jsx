import '@/styles/components.css'
import React, { useState, useEffect, Suspense } from 'react'
import { Router, Link } from '@reach/router';
import RouteTemplate from '@/routes/routesTemplate';
import MainPage from '@/pages/main/MainPage';
import TriassicPage from '@/pages/prehistoric/triassic/TriassicPage';
import JurassicPage from '@/pages/prehistoric/jurassic/JurassicPage';
import CretaceusPage from '@/pages/prehistoric/cretaceus/CretaceusPage.jsx';
import { FallbackRoute } from '@/routes/routeConfig';


function App() {
  return (
   <div>
   
    <Router>
    <MainPage path="/" />
    <TriassicPage path="/triassic" />
    <JurassicPage path="/jurassic" />
    <CretaceusPage path="/cretaceus" />
    <FallbackRoute default />
  </Router>
   </div>
  )
}

export default App;
