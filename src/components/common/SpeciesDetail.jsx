import React, { useState, useEffect } from 'react';
import DOMpurify from 'dompurify';
import ComponentImage from '@/components/ui/ComponentImage';
import ComponentImages from '@/components/ui/ComponentImages';
import EachUtils from '@/features/utils/EachUtils';
import trex from '@/assets/image/dinosaurus/tyrannosaurusrex.png';
import metadata from '@/features/property/metadata';

const SpeciesDetail = (props, id) => {
  const { usia_terpanjang,tinggi, tentang_penemu, teknik_berburu, teknik_pertahanan, predator, periode, penemu, panjang, nama, mangsa, makanan, lokasi_fosil, kecepatan_lari,  hidup, habitat, fosil_ditemukan_di,  deskripsi, ciri_khusus, berat, article } = props.id;
  
  const DATA = metadata.pages.pageDetail.detail.icons;
  const TITLE = metadata.pages.pageDetail.detail.title;
  const VALUE = [periode, makanan, usia_terpanjang, habitat];
  
  const [cleanHTML, setCleanHTML] = useState([]);
  
  useEffect(() => {
   const sanitizedHTML = DOMpurify.sanitize(article);
   setCleanHTML(sanitizedHTML);
  }, [article]);
  
  const ItemsDetail = ({ icons, title, value, image }) => {
   return (
    <div className={`items-detail ${image ? 'wrapper-column': '' }`}>
     {!image ? 
      (
       icons ? (<ion-icon class="small" id="paw" name={icons}></ion-icon>) : null
      ) : ( <ComponentImage image={image} classes='container-component-image' /> )
     }
     <div className='title-detail'>
      <p className='small text-species'>{title}</p>
      {!image && (
       <p className='tiny-small'>{value}</p>)}
     </div>
    </div>
   )
  }
  
  const ArticlesSpecies = () => {
   return (
    <div className='description-species'>
      <div
       className='tiny-small'
       dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />
      <ComponentImages pages='pageDetail' from='image' images='plants5' type='absolute' />
    </div>
   )
  }
  
  return (
    <div className='species-detail'>
    <div className='wrapper-flex'>
      <div className='species-detail-right'>
        <p className='small name-dino'>{nama}</p>
       <div className='wrapper-species-detail'>
         <ComponentImages pages='pageDetail' from='image' images='maps' type='static' />
       </div>
      </div>
      <div className='species-detail-left'>
        <p className="small name-dino">Infomasi</p>
         <div className='wrapper-species-detail'>
          <EachUtils
            of={DATA}
            render={(items, i) => (
             <ItemsDetail key={i} icons={items} title={TITLE[i]} value={VALUE[i]} />
            )}
          />
        </div>
      </div>
      </div>
      <div className='container-predator-species'>
       <div className='more-information-detail'>
        <ItemsDetail title='Informasi Lebih Lanjut'/>
        <ItemsDetail title='panjang' value={panjang} />
        <ItemsDetail title='tinggi' value={tinggi} />
        <ItemsDetail title='berat' value={berat} />
        <ItemsDetail title='kecepatan' value={kecepatan_lari} />
        <ItemsDetail title='fosil' value={fosil_ditemukan_di} />
        <ItemsDetail title='Benua' value={lokasi_fosil} />
        <ItemsDetail title='Informasi Lebih Lanjut'/>
        <ItemsDetail title='Ciri Khusus' value={ciri_khusus} />
        <ItemsDetail title='Mangsa/Makanan' value={mangsa} />
        <ItemsDetail title='Teknik Pertahanan' value={teknik_pertahanan} />
        <ItemsDetail title='Teknik Berburu' value={teknik_berburu || "tidak ada teknik berburu untuk dinosaurus " + nama + " karna tidak berburu/memakan dinosaurus"} />
       </div>
       <p className='small'>Predator</p>
       <div className='predator-species'>
         <EachUtils
          of={predator}
          render={(item, index) => (
            <ItemsDetail key={index} title={item} image={trex}/>
          )}
         />
       </div>
      </div>
      <ArticlesSpecies />
    </div>
  )
}

export default SpeciesDetail;