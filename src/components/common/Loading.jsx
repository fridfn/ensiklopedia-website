import React from 'react';
import '@/styles/Animation.scss';
import '@/styles/Pseudo.scss';
import LoadingGif from '@/components/common/LoadingGif';

const Loading = ({ event, type }) => {
 
  const Honeycomb = () => {
   return (
     <div className="honeycomb">
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
    </div>
   )
  }
  
  return (
   <div className="container-loading">
     <div className={`wrapper ${event}`}></div>
     {type === 'gif' ? (
       <LoadingGif gif='loading_dino' />
      ) : (
       <Honeycomb />
      ) }
   </div>
  )
}

export default Loading;