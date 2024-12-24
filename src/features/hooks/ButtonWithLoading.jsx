import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Loading from '@/components/common/Loading';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';

const ButtonWithLoading = ({ icon, name, page, event, data }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(null);
  
  const handleClick = () => {
   setIsLoading(true);
   
   setTimeout(() => {
     setIsLoading(false);
     navigate(page, { state: {datas: data}});
   }, 3000);
  }
  
  return (
   <>
    {isLoading && (<Loading event={event}/>)}
    <ButtonWithIcon onClick={handleClick} icon={icon} name={name} />
   </>
  )
}

export default ButtonWithLoading;

