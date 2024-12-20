import React from 'react';

const IconButton = ({ name }) => {
  return (
   <>
     <div className="wrapper">
      <button>
       <ion-icon class="icon big" name={name}></ion-icon>
      </button>
     </div>
   </>
  )
}

export default IconButton;