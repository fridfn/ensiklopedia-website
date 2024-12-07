import React from 'react';
import '@/styles/Element.scss';

const ModalPopup = ({ lokasi }) => {
  return (
   <>
   <div className="box-popup">
     <div className="items popup" id="popup">
       <p className="text-info tiny-bold">Penemuan fossil pertama di negara {lokasi}</p>
     </div>
   </div>
   </>
  )
}

export default ModalPopup;