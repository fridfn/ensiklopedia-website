import React, { useEffect, useState } from 'react';
import '@/Global.scss';
import '@/styles/App.scss';
import '@/styles/Active.scss';
import { Link } from 'react-router-dom';
import iconDino from '@/assets/dino.svg';
import scratch from '@/assets/icon/scratch.svg';
import ModalPopup from '@/components/widget/modalPopup';
import withToggleActive from '@/features/utils/withToggleActive';
import ButtonWithLoading from '@/features/hooks/ButtonWithLoading';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';
import checkDuplicateArr from '@/features/hooks/checkDuplicateArr';
import ComponentImages from '@/components/ui/ComponentImages';
import ComponentImage from '@/components/ui/ComponentImage';

let arrSpecies = [];

const List = ({ isActive, toggleActive, ...props }) => {
  const { dinosaurus, deskripsi, lokasi, periode } = props;
  const species = dinosaurus.split(' ').join('').toLocaleLowerCase();
  
  arrSpecies.push(species);
  
  const noDuplicateArr = checkDuplicateArr(arrSpecies);
  
  return (
   <div className='list' data-aos='zoom-in' data-aos-delay="500">
     <ComponentImages images='plants4' pages='pageList' from='images' type="absolute" />
     <div className="wrapper width-full" id="background-list">
       <ComponentImage image={iconDino} />
       <p className="name-list small">{dinosaurus}</p>
       <div className="cta">
         <ion-icon class="icon big" id="bookmark" name="bookmark"></ion-icon>
       </div>
      </div>
      <div className="descriptions-box">
        <p className="title litle">Zaman {periode}</p>
        <div className="wrapping" style={{boxShadow: 'inset 0px 3px 5px 4px $primary-cards', borderRadius: '5px'}}>
         <p className="description tiny-bold marquee">{deskripsi}</p>
        </div>
      </div>
      <div className="wrapper-flex" style={{ width: '100%' }}>
        <ButtonWithLoading 
          icon="paw"
          name="PELAJARI" 
          type='gif'
          event='anim'
          timeout='5000'
          usePlants={true}
          data={noDuplicateArr}
          page={`/home/dinosaurus/details/${species}`}
        />
        <div className={`container-popup wrapper-flex ${isActive ? 'active' : ''}`}>
         <ModalPopup lokasi={lokasi}/>
         <button className="buttons" onClick={toggleActive}>
           <ion-icon class="icon big" id="paw" name="earth"></ion-icon>
         </button>
        </div>
      </div>
    </div>
   );
};

export default withToggleActive(List);
