import { useNavigate } from 'react-router-dom'
import iconWeb from '@/assets/dinosaurus.jpg';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';
import WrappedButton from '@/components/widget/WrappedButton';

// isi nilai nama icon dari ion-icon untuk button header

const Header = ( props ) => {
  const { button, title, useBack } = props;
  const navigate = useNavigate();
  
  return (
   <div className="header">
     <div className="wrapper">
       {useBack ? (
         <ButtonWithIcon icon={useBack} name="" onClick={(() => navigate(-1))} /> 
       ) : (
         <img width="34" src={iconWeb} />
       )}
      <p className="title-heading">{title}</p>
     </div>
     {
      <>
      {button && (
        <WrappedButton icons={button} /> )}
      </>
     }
   </div>
  );
};

export default Header;