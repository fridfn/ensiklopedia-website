import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Loading from '@/components/common/Loading';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';

const ButtonWithLoading = ({ icon, name, page, event, data, type, timeout, usePlants }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(null);
  
  const handleClick = () => {
   setIsLoading(true);
   
   setTimeout(() => {
     setIsLoading(false);
     navigate(page, { state: {datas: data}});
   }, timeout || 4000);
  }
  
  return (
   <>
    {isLoading && (
      <Loading event={event} type='gif' plants={usePlants} />
    )}
    <ButtonWithIcon onClick={handleClick} icon={icon} name={name} />
   </>
  )
}

export default ButtonWithLoading;

