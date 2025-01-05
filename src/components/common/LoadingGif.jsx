import React from 'react';
import metadata from '@/features/property/metadata';


const LoadingGif = ({ gif }) => {
  const loading = metadata.loading[gif];
  
  const width = loading.width;
  const height = loading.height;
  const getImage = loading.image;
  
  const disableClick = (e) => {e.preventDefault()}
  
  return (
   <div className='loading-gif'>
    <img src={getImage} onContextMenu={disableClick} width={width} height={height}/>
    <br></br>
    <p className='tiny' style={{ position: 'relative', top: '-20px' }}>Loading</p>
   </div>
  )
}

export default LoadingGif;