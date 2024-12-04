import mainIcon from '@/assets/dinosaurus.jpg'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

const LoadingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
   const timer = setTimeout(() => {
    setLoading(false);
    navigate('/home/dinosaurus/pages/1');
   }, 3000);
   
   return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
   <div className="loading-spinner">
   <div className="wrapper-column">
     <img src={mainIcon} width="165" alt="icon-main"/>
     <p className="title small">ENSIKLOPEDIA</p>
     <p className="description tiny" style={{ width: '300px', textAlign: 'center', fontWeight: '410', fontSize: '12px'}}>Dinosaurus menguasai bumi jutaan tahun yang lalu. di dalam website ini, tim saya mengajak kamu untuk menjelajahi fakta fakta menarik, fosil fosil terpenting, zaman zaman prasejarah dan pengetahuan tentang makhluk purba yang pernah hidup di planet ini terkhusus nya dinosaurus</p>
    </div>
     <div className="loading-spinner-inner">
       <div className="loading-spinner-circle"></div>
       <div className="loading-spinner-circle"></div>
       <div className="loading-spinner-circle"></div>
       <div className="loading-spinner-circle"></div>
       <div className="loading-spinner-circle"></div>
     </div>
   </div>
  )
}

export default LoadingPage;