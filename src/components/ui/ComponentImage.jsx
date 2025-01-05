import React from 'react';

const ComponentImage = ({ image }) => {
 const disableClick = (e) => {e.preventDefault()};
 
 return (
  <div className='container-component-image'>
    <div className='pin'></div>
    <div className='component-icons-image'>
     <img src={image} onContextMenu={disableClick} className='icons-image' alt='image dinosaurus' />
    </div>
  </div>
 )
}

export default ComponentImage;