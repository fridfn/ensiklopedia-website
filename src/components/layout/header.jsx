import iconWeb from '@/assets/dinosaurus.jpg';
import WrappedButton from '@/components/widget/WrappedButton';

const Header = () => {
  const iconButton = ['search-sharp', 'options', 'person']
  
  return (
   <div className="header">
     <div className="wrapper">
       <img width="34" src={iconWeb}/>
       <p className="title-heading">Ensiklopedia</p>
     </div>
     <WrappedButton icons={iconButton} />
   </div>
  );
};

export default Header;