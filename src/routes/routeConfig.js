import MainPage from '@/pages/main/MainPage.jsx';
import TriassicPage from '@/pages/prehistoric/triassic/TriassicPage';
import JurassicPage from '@/pages/prehistoric/jurassic/JurassicPage';
import CretaceusPage from '@/pages/prehistoric/cretaceus/CretaceusPage';
import NotFound from '@/pages/main/NotFound';

export const routes = [
  { path: '/', Component: MainPage },
  { path: '/triassic', Component: TriassicPage },
  { path: '/jurassic', Component: JurassicPage },
  { path: '/cretaceus', Component: CretaceusPage },
];

export const FallbackRoute = NotFound;
