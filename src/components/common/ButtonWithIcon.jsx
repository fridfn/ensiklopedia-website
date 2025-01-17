import React from 'react';

const ButtonWithIcon = ({ icon, name, onClick, id }) => {
  return (
    <button onClick={onClick} id={id} className="button-wrapper wrapper-flex">
      <ion-icon class="icon small" id="paw" name={icon}></ion-icon>
      { name && (
       <p className="button tiny-bold">{name}</p>
      )}
    </button>
  )
}

export default ButtonWithIcon;