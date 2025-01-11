import { useNavigate } from 'react-router-dom'
import ParticlesComponent from '@/features/particles/ParticlesComponent';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';
import ComponentImages from '@/components/ui/ComponentImages';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
   <>
    <ParticlesComponent icons="🌿" />
    <div className="container">
    <ComponentImages from="images" images="plants2" type="fixed" pages="notFound"/>
    <ComponentImages from="images" images="plants5" type="fixed" pages="notFound"/>
      <div className="box-notfound">
        <p className="not-found">404</p>
        <div className="wrapper-notfound">
          <span>
            <p className="big">MAAF,</p>
            <p className="tiny" style={{fontSize: '10px'}}>halaman yang kamu cari saat ini tidak tersedia</p>
          </span>
          <ButtonWithIcon icon="arrow-back" name="kembali?" onClick={(() => navigate('/home/dinosaurus/pages/1'))}/>
          <ComponentImages pages='notFound' from='images' images='dinoSad' type='absolute' />
        </div>
      </div>
    </div>
   </>
  )
}

export default NotFound;