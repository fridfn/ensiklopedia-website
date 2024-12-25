import React, { useState, useEffect } from 'react';
import NotFound from '@/pages/main/NotFound';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import fetchDinosaurus from '@/features/hooks/fetchDinosaurus';
import Loading from '@/components/common/Loading';
import Header from '@/components/layout/header';
import Cards from '@/components/layout/cards';

const DetailPages = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { species } = useParams();
  
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { datas } = location.state || {};
  const validateLetterLess = detail.some(name => name.toLocaleLowerCase() === species.toLocaleLowerCase());
  
  useEffect(() => {
   if (datas) { 
    setDetail(datas);
    setIsLoading(false);
   } else {
    const fetchData = async () => {
     try {
      const data = await fetchDinosaurus(setDetail, setIsLoading, setError)
       
       const getSpecies = data.map((props) => props.nama.split(' ').join('').toLocaleLowerCase());
       
       setData(data);
       setDetail(getSpecies);
      } catch (error) { console.log('terjadi eror', error) }
     }
    fetchData();
   }
  }, [datas]);
  
  return (
   <>
     {isLoading ? (
       <Loading />
     ) : (!validateLetterLess ? (
        <NotFound />
       ) : (
        <Header title={species} useBack={["arrow-back"]} />
       )
     )}
   </>
  )
}

export default DetailPages;
