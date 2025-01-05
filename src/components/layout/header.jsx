import { useNavigate } from 'react-router-dom'
import iconWeb from '@/assets/dinosaurus.jpg';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';
import WrappedButton from '@/components/widget/WrappedButton';
import ComponentImages from '@/components/ui/ComponentImages';

const Header = ( props ) => {
  const { button, title, useBack } = props;
  const navigate = useNavigate();
  
  return (
   <>
   <ComponentImages images="plants2" pages="pageList" from='images' type='fixed' />
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
        <WrappedButton array={button} /> )}
      </>
     }
   </div>
   </>
  );
};

export default Header;