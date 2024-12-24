import { useNavigate } from 'react-router-dom'
import ParticlesComponent from '@/features/particles/ParticlesComponent';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
   <>
    <ParticlesComponent icons="⛔" />
    <div className="container">
      <div className="box-notfound">
        <p className="not-found">404</p>
        <div className="wrapper-notfound">
          <span>
            <p className="big">MAAF,</p>
            <p className="tiny" style={{fontSize: '10px'}}>halaman yang kamu cari saat ini tidak tersedia</p>
          </span>
          <ButtonWithIcon icon="arrow-back" name="kembali?" onClick={(() => navigate('/home/dinosaurus/pages/1'))}/>
        </div>
      </div>
    </div>
   </>
  )
}

export default NotFound;