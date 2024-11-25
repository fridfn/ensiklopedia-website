

const Header = () => {
  return (
   <div className="header">
     <div className="wrapper">
       <img width="34" src="../src/assets/dino.svg"/>
       <p className="title-heading">Ensiklopedia</p>
     </div>
     <div className="wrapper">
       <ion-icon class="icon big" name="search-sharp"></ion-icon>
       <ion-icon class="icon big" name="options"></ion-icon>
     </div>
   </div>
  );
};

export default Header;