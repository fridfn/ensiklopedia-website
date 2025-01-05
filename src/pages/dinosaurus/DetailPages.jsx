import React, { useState, useEffect } from 'react';
import NotFound from '@/pages/main/NotFound';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import fetchDinosaurus from '@/features/hooks/fetchDinosaurus';
import Loading from '@/components/common/Loading';
import Header from '@/components/layout/header';
import ComponentImages from '@/components/ui/ComponentImages';
import SpeciesDetail from '@/components/common/SpeciesDetail';
import HeadingSpecies from '@/components/common/HeadingSpecies';

const DetailPages = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { species } = useParams();
  const [detail, setDetail] = useState([]);
  const [isSpecies, setIsSpecies] = useState([]);
  const [dinoId, setDinoId] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { datas } = location.state || {};
  const validateLetterLess = isSpecies.some(name => name.toLocaleLowerCase() === species.toLocaleLowerCase());
  
  const fetchData = async () => {
   try {
    const result = await fetchDinosaurus(setIsSpecies, setIsLoading, setError, 5000);
    
     const getSpecies = result.map((props) => props.nama.split(' ').join('').toLocaleLowerCase());
     
     setDetail(result);
     setIsSpecies(getSpecies);
    } catch (error) {
     console.log('terjadi eror', error)
    }
  }
  
  useEffect(() => {
   fetchData();
   
   if (datas) { 
    setIsSpecies(datas);
    setTimeout(() => {
     setIsLoading(false);
    }, 1200);
   }
  }, [datas]);
  
  useEffect(() => {
   const formatName = nama => nama.toLowerCase().replace(/\s+/g, '');
   const getDinoId = detail.find(dino => formatName(dino.nama) === species);
   
   setDinoId(getDinoId);
  }, [detail]);
  
  return (
   <>
     {isLoading ? (
       <Loading type='null' />
     ) : (!validateLetterLess ? (
        <NotFound />
       ) : (
        <div className="container wrapper-column">
          <Header title={species} useBack={["arrow-back"]} />
          <HeadingSpecies props={detail} id={dinoId} />
          <SpeciesDetail props={detail} id={dinoId} />
        </div>
       )
     )}
   </>
  )
}

export default DetailPages;
