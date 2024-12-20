import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPages = () => {
  const { species } = useParams();
  
  return (
   <h1>HELLO DETAIL PAGES {species}</h1>
  )
}

export default DetailPages;
