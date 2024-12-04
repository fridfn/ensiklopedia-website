import React, { useEffect, useState } from 'react';
import '@/global.css';
import '@/styles/App.scss';
import '@/styles/Active.scss';
import iconDino from '@/assets/dino.svg';
import scratch from '@/assets/icon/scratch.svg';
import ModalPopup from '@/components/widget/modalPopup';
import withToggleActive from '@/features/utils/withToggleActive';

const List = ({ isActive, toggleActive, ...props }) => {
  return (
    <div className="list">
     <div className="wrapper width-full" id="background-list">
       <div className="box-image">
         <img className="icon-image" src={iconDino}/>
       </div>
       <p className="name-list small">{props.dinosaurus}</p>
       <div className="cta">
         <ion-icon class="icon big" id="bookmark" name="bookmark"></ion-icon>
       </div>
      </div>
      <div className="descriptions-box">
        <p className="title litle">Zaman {props.periode}</p>
        <div className="wrapping" style={{boxShadow: 'inset 0px 3px 5px 4px $primary-cards', borderRadius: '5px'}}>
         <p className="description tiny-bold marquee">{props.deskripsi}</p>
        </div>
      </div>
      <div className="wrapper-flex" style={{width: '100%'}}>
        <div className="button-list wrapper-flex">
         <button className="button tiny-bold">PELAJARI</button>
         <ion-icon class="icon small" id="paw" name="paw"></ion-icon>
        </div>
        <div className={`container-popup wrapper-flex ${isActive ? 'active' : ''}`}>
         <ModalPopup lokasi={props.lokasi}/>
         <button className="buttons" onClick={toggleActive}>
           <ion-icon class="icon big" id="paw" name="earth"></ion-icon>
         </button>
        </div>
      </div>
    </div>
   );
};

export default withToggleActive(List);