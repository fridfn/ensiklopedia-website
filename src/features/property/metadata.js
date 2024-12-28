import plants1 from '@/assets/image/plants/plants_1.png';
import plants2 from '@/assets/image/plants/plants_2.svg';
import plants3 from '@/assets/image/plants/plants_3.svg';
import plants4 from '@/assets/image/plants/plants_4.svg';
import dinoLoading from '@/assets/image/dinosaurus/dino-loading.webp';


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
  plants: {
   plants1: {
    image: plants1,
    position: 'right',
    gap: [10, 30, 50, 70, 90]
   },
   plants2: {
    image: plants2,
    position: 'right',
    gap: ['-30', '70', '120', '180', '270'],
    top: ['40', '30', '30', '30', '48']
   },
   plants3: {
    image: plants3,
    position: 'right',
    gap: [10, 30, 50, 70, 90]
   },
   plants4: {
    image: plants4,
    position: 'left',
    gap: ['-40', '290'],
    top: ['-15', '100']
   }
  },
  loading: {
   loading_dino: {
    image: dinoLoading,
    position: 'left',
    width: '75',
    height: '75'
   },
   loading_plants: {
    image: dinoLoading,
   }
  }
}

export default properties;