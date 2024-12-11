import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import Carousel from './pages/Carousel';
import HotelCard from './pages/HotelCard';
import Home from './pages/Home';
import Hom from './pages/Hom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Carousel />

      <HotelCard />

      <Home />

      <Hom />
    </div>
  );
}

export default App;