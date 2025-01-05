import React, { useRef, useEffect, useState } from 'react';
import ParticlesComponent from '@/features/particles/ParticlesComponent';
import ComponentImages from '@/components/ui/ComponentImages';
import WrappedButton from '@/components/widget/WrappedButton';
import metadata from '@/features/property/metadata';
import SpeciesDetail from '@/components/common/SpeciesDetail.jsx';

const HeadingSpecies = (props, id) => {
  const { usia_terpanjang,tinggi, tentang_penemu, teknik_berburu, predator, periode, penemu, panjang, nama, mangsa, makanan, lokasi_fosil, kecepatan_lari,  hidup, habitat, fosil_ditemukan_di, deskripsi, ciri_khusus, berat, foto_dinosaurus, foto_penemu } = props.id;
  
  const pRef = useRef(null);
  const [text, getText] = useState('');
  
  useEffect(() => {
   const value = pRef.current.textContent;
   getText(value);
  }, []);
  
  
  const button = metadata.pages.pageDetail.button;
  const BUTTON_FIRST = button.first;
  const disableClick = (e) => {e.preventDefault()};
  
  return (
   <>
   <ParticlesComponent icons="🌿" />
   <div className="container-cards-icons">
     <div className="wrapper-cards-icons">
      <div className="cards-icons">
       <ComponentImages pages='pageDetail' images={foto_dinosaurus} from='dino' type='relative' isSpecial={true} />
      </div>
      <div className="wrapper-icons-title wrapper-column">
        <div className="higlight-title-box wrapper-flex to-left">
          <ion-icon class="small" id="paw" name="earth"></ion-icon>
          <h4 className="higlight-title small">Tentang</h4>
          <p className='nama-dinosaurus'>{nama}</p>
        </div>
        <div className='padding-marquee'>
         <p className="tiny-small pd-r-text"
         ref={pRef}>{deskripsi}</p>
       </div>
      </div>
     </div>
   </div>
    <div className="cards-items">
     <div className="wrapper-icons-cards">
      <div className="cards-icons ab-left">
        <ComponentImages pages='pageDetail' images={foto_penemu} from='penemu' type='relative' isSpecial={true} />
      </div>
     </div>
     <div className="wrapper-icons-title wrapper-column">
       <div className="higlight-title-box wrapper-flex to-right" id="right">
         <ion-icon class="small" id="paw" name="earth"></ion-icon>
         <h4 className="higlight-title small">Tokoh Penemu</h4>
         <p className='nama-penemu'>{penemu}</p>
       </div>
       <div className='padding-marquee'>
        <p className="tiny-small pd-l-text" id="deskripsi-penemu"
        ref={pRef}>{tentang_penemu}</p>
      </div>
     </div>
    </div>
    <div className='higlight-title-box' id='detail'>
      <p className='small'>Detail Dinosaurus</p>
      <ComponentImages pages='pageDetail' from='image' images='plants6' type='absolute' />
    </div>
   </>
  )
}

export default HeadingSpecies;