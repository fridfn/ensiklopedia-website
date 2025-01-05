import React, { useEffect, useState } from 'react';
import useDuplicateItems from '@/features/utils/useDuplicateItems';
import metadata from '@/features/property/metadata';

const ComponentImages = ({ pages, from, images, type, effect, isSpecial }) => {
 
 const validateValues = (isValid) => {
   let value;
   if (isValid) {
     value = metadata.pages[pages]["image"]["dataDinosaurus"][from][images];
   } else {
     value = metadata.pages[pages][from][images];
   }
   return value;
 }
 
  const values = validateValues(isSpecial);
  const position = Object.entries(values).map((key, index) => { return key[0] })[3];
  
  const gap = values.gap;
  const width = values.width;
  const top = values[position];
  const height = values.height;
  const getImage = values.image;
  const isPosition = values.position === 'right';

  const disableClick = (e) => {e.preventDefault()};
  
  return (
   <>
    {gap.map((value, index) => {
      return <img onContextMenu={disableClick} src={getImage} key={index} width={width ? width : '250'} height={height ? height : '150'} className={`image-component ${effect ? effect : ''}`}
       style={{
        ...(isPosition ? { right: value + 'px' } : { left: value + 'px' }),
        position: type,
        ...(position === 'top' ? { top: top[index] + 'px' } : { bottom: top[index] + 'px' })
      }}/>
     })}
   </>
  )
}

export default ComponentImages;