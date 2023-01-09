import './App.scss';
import AppAppBar from './pages/appHeader';
import BackgroundCompany from './pages/headerCompany';
import CarouselCompany from './pages/colapsCompany';
import ValuesCompany from './pages/valuesCompany';
import SpeciallyCompany from './pages/speciallyCompany';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <div style={{ paddingLeft: '15em', paddingRight: '15em'}}>
      <AppAppBar />
      <BackgroundCompany />
      <CarouselCompany />
      <ValuesCompany />
      <SpeciallyCompany />
    </div>
  );
}
