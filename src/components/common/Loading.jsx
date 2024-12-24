import React from 'react';
import '@/styles/Animation.scss';
import '@/styles/Pseudo.scss';


const Loading = ({ event, type }) => {
  
  return (
   <div className="container-loading">
     <div className={`wrapper ${event}`}></div>
    <div className="honeycomb">
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
      <div className="comb"></div>
    </div>
   </div>
  )
}

export default Loading;