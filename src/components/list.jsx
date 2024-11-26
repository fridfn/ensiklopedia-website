import React, { useEffect, useState } from 'react';

const List = () => {
  const [dinosaurus, setDinosaurus] = useState([]);
  
  return (
    <div className="list">
     <div className="wrapper width-full" id="background-list">
       <div className="box-image">
         <img className="icon-image" src="./dinosaurus.jpg"/>
       </div>
       <p className="name-list small">Dinosaurus</p>
       <div className="cta">
         <ion-icon class="icon big" id="bookmark" name="bookmark"></ion-icon>
       </div>
      </div>
      <div className="descriptions-box">
        <p className="title litle">Zaman Neolitikum</p>
        <div className="wrapping" style={{boxShadow: 'inset 0px 3px 5px 4px var(--primary-cards)'}}>
         <p className="description tiny marquee">commodo id in officia adipisicing nostrud et ad qui elit excepteur magna in mollit eiusmod Lorem ad qui nisi nulla ut aute exercitation proident incididunt anim aliquip aliquip sunt anim Lorem exercitation eu laboris ea commodo do ex officia excepteur</p>
        </div>
      </div>
    </div>
   );
};

export default List;