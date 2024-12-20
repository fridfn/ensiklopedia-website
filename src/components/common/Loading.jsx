import React from 'react';
import '@/styles/Animation.scss';
import '@/styles/Pseudo.scss';


const Loading = () => {
  return (
   <div className="container-loading">
    <div className="honeycomb">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
   </div>
  )
}

export default Loading;