import React from 'react';
import '@/styles/Animation.scss';
import '@/styles/Pseudo.scss';
import LoadingGif from '@/components/common/LoadingGif';
import ComponentImages from '@/components/ui/ComponentImages';

const Loading = ({ event, type, plants }) => {
  const SkyBackground = () => {
   return (
    <>
     <ComponentImages plants="sun" type="absolute" effect="size-small" />
     <ComponentImages plants="cloud" type="absolute" effect="size-medium skyAnimate" />
    </>
   )
  }
  
  const BushBackground = () => {
   if (!plants) return null;
   
   return (
    <>
     <SkyBackground />
     <ComponentImages plants="plants5" type="absolute" />
    </>
   )
  }
  
  const Honeycomb = () => {
   const comb = Array(7).fill(null);
   
   return (
    <div className="honeycomb">
      {comb.map((_, index) => (
       <div key={index} className="comb">
       </div>
      ))}
    </div>
   )
  }
  
  return (
   <div className="container-loading">
     <div className={`wrapper ${event}`}>
     </div>
     {type === 'gif' ? (
       <LoadingGif gif='loading_dino' />
      ) : (
       <Honeycomb />
      )}
   </div>
  )
}

export default Loading;