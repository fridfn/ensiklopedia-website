import React from 'react';
import dinoPng from '@/assets/image/dinosaurus/trex.png';

const CardsIcons = () => {
  return (
   <div className="container-cards-icons">
     <div className="wrapper-cards-icons">
      <div className="cards-icons">
        <img src={dinoPng} width="250" height="150" className="cards-icons-png" />
      </div>
      <div className="wrapper-icons-title wrapper-column">
        <div className="higlight-title-box wrapper-flex to-left">
          <ion-icon class="small" id="paw" name="earth"></ion-icon>
          <h4 className="higlight-title small">Tentang</h4>
        </div>
        <p className="tiny-small pd-r-text">commodo qui fugiat tempor ad minim in veniam proident et sit mollit sunt Lorem laboris et deserunt amet enim magna ex est non ipsum adipisicing non reprehenderit sit dolor veniam velit aliqua fugiat </p>
      </div>
     </div>
   </div>
  )
}

export default CardsIcons;