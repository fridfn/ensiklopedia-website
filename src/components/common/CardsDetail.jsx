import React from 'react';
import dinoPng from '@/assets/image/dinosaurus/trex2.png';
import PLANTS_3 from '@/assets/image/plants/plants_3.svg';
import ParticlesComponent from '@/features/particles/ParticlesComponent';

const CardsDetail = () => {
 
  return (
   <>
   <ParticlesComponent icons="🌿" />
   <div className="container-cards-detail">
     <div className="wrapper-cards-detail">
       <div className="cards-items">
        <div className="wrapper-icons-cards">
         <div className="cards-icons ab-left">
           <img src={dinoPng} width="250" height="150" className="cards-icons-png pd-top" />
         </div>
        </div>
        <div className="wrapper-icons-title wrapper-column">
          <div className="higlight-title-box wrapper-flex to-right" id="right">
            <ion-icon class="small" id="paw" name="earth"></ion-icon>
            <h4 className="higlight-title small">Fakta Menarik</h4>
          </div>
          <p className="tiny-small pd-l-text">nulla ullamco dolor excepteur cillum magna pariatur ipsum incididunt ad qui in aliqua officia irure Lorem dolor eu est labore sint mollit culpa occaecat ut</p>
        </div>
       </div>
       <section className="section-detail-dinosurus center-flx">
         <div className="higlight-title-box wrapper-flex" id="detail">
            <h4 className="higlight-title small">Fakta Menarik</h4>
            <img src={PLANTS_3} width="200" height="100" style={{right: '23px', bottom: '-10px', top: '-23px'}} className="plants-wall" />
          </div>
       </section>
     </div>
   </div>
   </>
  )
}

export default CardsDetail;