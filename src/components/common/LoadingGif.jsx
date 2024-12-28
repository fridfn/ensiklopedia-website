import React from 'react';
import metadata from '@/features/property/metadata';


const LoadingGif = ({ gif }) => {
  const loading = metadata.loading[gif];
  
  const width = loading.width;
  const height = loading.height;
  const getImage = loading.image;
  
  return (
    <img src={getImage} className='loading-gif' width={width} height={height}/>
  )
}

export default LoadingGif;