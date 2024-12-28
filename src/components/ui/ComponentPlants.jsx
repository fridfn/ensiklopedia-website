import React, { useEffect, useState } from 'react';
import useDuplicateItems from '@/features/utils/useDuplicateItems';
import metadata from '@/features/property/metadata';

const ComponentPlants = ({ plants, type })=> {
  const getPlants = metadata.plants[plants];
  
  const gap = getPlants.gap;
  const top = getPlants.top;
  const plantsImage = getPlants.image;
  const isPosition = getPlants.position === 'right';
  
  return (
   <>
    {gap.map((value, index) => {
      return <img src={plantsImage} key={index} width="250" height="150" className="plants-wall" style={{
        ...(isPosition ? { right: value + 'px' } : { left: value + 'px' }),
        position: type,
        ...(top ? { top: top[index] + 'px' } : {})
      }}/>
     })}
   </>
  )
}

export default ComponentPlants;