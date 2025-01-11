import plants2 from '@/assets/image/plants/plants_2.svg';
import plants3 from '@/assets/image/plants/plants_3.svg';
import plants4 from '@/assets/image/plants/plants_4.svg';
import plants5 from '@/assets/image/plants/plants_5.svg';
import plants6 from '@/assets/image/plants/plants_6.svg';
import dinoLoading from '@/assets/image/dinosaurus/dino-loading.webp';
import mapsDinosaurs from '@/assets/image/map-dinosaurus.svg';
import cloudImage from '@/assets/image/plants/cloud.svg';
import sunImage from '@/assets/image/plants/sun.svg';
import dinoSad from '@/assets/image/dinosaurus/404dino.webp';

// dinosaurus module
import tyrannosaurusrex from '@/assets/image/dinosaurus/tyrannosaurusrex.png';
import triceratops from '@/assets/image/dinosaurus/triceratops.png';
import velociraptor from '@/assets/image/dinosaurus/velociraptor.png';
import brachiosaurus from '@/assets/image/dinosaurus/brachiosaurus.png';
import stegosaurus from '@/assets/image/dinosaurus/stegosaurus.png';


// dinosaurus penemu
import barnumbrown from '@/assets/image/penemu/barnumbrown.png';
import othnielcharlesmarsh from '@/assets/image/penemu/othnielcharlesmarsh.png';
import henryfairfieldosborn from '@/assets/image/penemu/henryfairfieldosborn.png';
import elmersriggs from '@/assets/image/penemu/elmersriggs.png';


const properties = {
  navbar: {
   url: [
    '/home/dinosaurus/pages/1',
    '/home/dinosaurus/pages/2',
    '/home/dinosaurus/pages/3',
    '/home/dinosaurus/pages/4',
   ],
   name: [
    'Home',
    'Cretaceus',
    'Jurrasic',
    'Triassic',
   ],
   icon: [],
   count: 4,
   content: '',
  },
  sidebar: {
   url: [
    '/home/dinosaurus/pages/1',
    '/home/dinosaurus/pages/2',
    '/home/dinosaurus/pages/3',
    '/home/dinosaurus/pages/4',
   ],
   name: [
    'Di Simpan',
    'Profil saya',
    'pengaturan',
    'kirim masukan',
    'About Developer',
   ],
   icon: [
    'bookmark',
    'person',
    'settings',
    'chatbubbles',
    'people',
    'whatsapp',
   ],
   count: 5,
   content: '',
  },
  pages: {
   pageDetail: {
    button: {
     first: ['earth', 'person', 'settings'],
     second: ['earth', 'person', 'settings'],
     third: ['earth', 'person', 'settings'],
    },
    detail: {
     icons: ['earth', 'person', 'globe', 'time'],
     title: ['periode', 'jenis', 'usia', 'habitat'],
    },
    image: {
     plants5: {
      image: plants5,
      position: 'right',
       gap: ['-40', '50', '160', '250'],
       bottom: ['-110', '-105', '-112', '-106']
     },
     plants6: {
      image: plants6,
      position: 'left',
       gap: ['-10', '110', '215'],
       top: ['0', '0', '0']
     },
     maps: {
      image: mapsDinosaurs,
      position: 'left',
      height: '150',
      width: '150',
      gap: ['0']
     },
     dataDinosaurus: {
      penemu: {
       barnumbrown: {
        image: barnumbrown,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['45']
       },
       othnielcharlesmarsh: {
        image: othnielcharlesmarsh,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['45']
       },
       henryfairfieldosborn: {
        image: henryfairfieldosborn,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['45']
       },
       elmersriggs: {
        image: elmersriggs,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['45']
       }
      },
      dino: {
       tyrannosaurusrex: {
        image: tyrannosaurusrex,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['0']
       },
       triceratops: {
        image: triceratops,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['0']
       },
       velociraptor: {
        image: velociraptor,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['-15'],
       },
       brachiosaurus: {
        image: brachiosaurus,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['0']
       },
       stegosaurus: {
        image: stegosaurus,
        position: 'left',
        height: '150',
        width: '150',
        gap: ['0']
       }
      }
     }
    },
   },
   pageList: {
    button: {
     first: ['earth', 'person', 'settings'],
     second: ['earth', 'person', 'settings'],
     third: ['earth', 'person', 'settings'],
    },
    images: {
     plants2: {
      image: plants2,
      position: 'right',
      gap: ['-30', '70', '120', '180', '270'],
      top: ['40', '30', '30', '30', '30']
     },
     plants3: {
      image: plants3,
      position: 'left',
      gap: ['-10'],
      top: ['-23']
     },
     plants4: {
      image: plants4,
      position: 'left',
      gap: ['-40', '290'],
      top: ['-15', '100']
     },
     plants5: {
      image: plants5,
      position: 'right',
      gap: ['-40', '50', '160', '250'],
      top: ['230', '240', '220', '220']
     },
     plants6: {
      image: plants6,
      position: 'left',
      gap: ['-10', '110', '215'],
      top: ['10', '10', '10']
     },
    },
   },
   notFound: {
    images: {
     plants2: {
      image: plants2,
      position: 'right',
       gap: ['-30', '70', '120', '180', '270'],
       top: ['-8', '-9', '-8', '-10', '-10']
     },
     plants5: {
      image: plants5,
      position: 'left',
       gap: ['-40', '50', '160', '250'],
       bottom: ['-22', '-18', '-21', '-23']
     },
     plants6: {
      image: plants6,
      position: 'left',
       gap: ['-10', '110', '215'],
       top: ['10', '10', '10']
     },
     dinoSad: {
      image: dinoSad,
      position: 'left',
       gap: ['80'],
       bottom: ['-83']
     }
    },
   },
  },
  componentImage: {
   sun: {
    image: sunImage,
    position: 'right',
    gap: ['50'],
    top: ['20'],
    width: '30',
    height: '30'
   },
   cloud: {
    image: cloudImage,
    gap: ['-20', '120', '260',],
    top: ['5', '-15', '-10'],
    width: '50',
    height: '75'
   }
  },
  loading: {
   loading_dino: {
    image: dinoLoading,
    position: 'left',
    width: '75',
    height: '75'
   }
  }
}

export default properties;