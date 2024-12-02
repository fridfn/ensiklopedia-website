import React, { useEffect, useState } from 'react';
import '@/global.css';
import '@/styles/active.css';
import iconDino from '@/assets/dino.svg';
import scratch from '@/assets/icon/scratch.svg';
import ModalPopup from '@/components/widget/modalPopup';
import withToggleActive from '@/features/utils/withToggleActive';

const List = ({ isActive, toggleActive }) => {
  return (
    <div className="list">
     <div className="wrapper width-full" id="background-list">
       <div className="box-image">
         <img className="icon-image" src={iconDino}/>
       </div>
       <p className="name-list small">Dinosaurus</p>
       <div className="cta">
         <ion-icon class="icon big" id="bookmark" name="bookmark"></ion-icon>
       </div>
      </div>
      <div className="descriptions-box">
        <p className="title litle">Zaman Neolitikum</p>
        <div className="wrapping" style={{boxShadow: 'inset 0px 3px 5px 4px var(--primary-cards)', borderRadius: '5px'}}>
         <p className="description tiny-bold marquee">commodo id in officia adipisicing nostrud et ad qui elit excepteur magna in mollit eiusmod Lorem ad qui nisi nulla ut aute exercitation proident incididunt anim aliquip aliquip sunt anim Lorem exercitation eu laboris ea commodo do ex officia excepteur</p>
        </div>
      </div>
      <div className="wrapper-flex" style={{width: '100%'}}>
        <div className="button-list wrapper-flex">
         <button className="button tiny-bold">PELAJARI</button>
         <ion-icon class="icon small" id="paw" name="paw"></ion-icon>
        </div>
        <div className={`container-popup wrapper-flex ${isActive ? 'active' : ''}`}>
         <ModalPopup />
         <button className="buttons" onClick={toggleActive}>
           <ion-icon class="icon big" id="paw" name="information"></ion-icon>
         </button>
        </div>
      </div>
    </div>
   );
};

export default withToggleActive(List);