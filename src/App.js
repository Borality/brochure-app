import './App.css'
import Navbar from './components/Navbar'
import SecondNavbar from './components/SecondNavbar'
import PizzaPicture from './components/PizzaPicture'
import CardsSection from './components/CardsSection'
import MobileInfo from './components/MobileInfo'

function App() {
  return (
    <div>
      <Navbar/>
      <SecondNavbar/>
      <PizzaPicture/>
      <CardsSection/>
      <MobileInfo/>
    </div>
  );
}

export default App;
