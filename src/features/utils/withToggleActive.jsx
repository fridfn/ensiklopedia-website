import React, { useState } from 'react';

const withToggleActive = (Components) => {
 return (props) => {
  const [ isActive, setIsActive ] = useState(false);
  
  const toggleActive = () => {
   setIsActive((prevState) => !prevState);
  }
  
  return <Components isActive={isActive} toggleActive={toggleActive} {...props}/>
 }
}

export default withToggleActive;