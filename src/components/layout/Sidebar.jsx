import '@/styles/App.scss';
import withToggleActive from '@/features/utils/withToggleActive';
import mainIcon from '@/assets/icon/dinosaurus.png';
import properties from '@/features/property/metadata.js';

const Sidebar = ({ isActive, toggleActive }) => {
  const { sidebar } = properties;
  
  const sidebarItems = sidebar.name.map((name, index) => {
   return (
    <div className="items" key={index} id="icons-effects">
     <ion-icon class="icon big sec-color-icon" id="paw" name={sidebar.icon[index]}></ion-icon>
     <p className="text-info tiny-bold">{name}</p>
    </div>
   )
  })
  
  return (
   <>
   <div className={`blur-background ${isActive ? 'active' : ''}`}></div>
    <div className={`sidebar center-clm ${isActive ? 'active' : ''}`}>
     <div className="wrapper-column" style={{paddingRight: '25px'}}>
       <div className="main-box-icon">
        <img src={mainIcon} className="icon-image" />
       </div>
       <p className="text-info big">ENSIKLOPEDIA</p>
       <p className="text-info tiny" style={{textAlign: 'center'}}>Menjelajah Dunia Kuno Bersama Para Dinosaurus!</p>
       <button className='sidebar-btn' onClick={toggleActive} aria-label="Toggle Sidebar"></button>
     </div>
     <div className="section-items">
      {sidebarItems}
     </div>
     <p className="text-info tiny-bold" style={{fontSize: '10px', position: 'sticky', bottom: '15px', marginRight: '10px'}}>©Copyrights 2024 All right's reserved</p>
    </div>
   </>
  )
}

export default withToggleActive(Sidebar);