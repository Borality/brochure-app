import './App.css'
import Navbar from './components/homepage/Navbar'
import SecondNavbar from './components/homepage/SecondNavbar'
import PizzaPicture from './components/homepage/PizzaPicture'
import CardsSection from './components/homepage/CardsSection'
import MobileInfo from './components/homepage/MobileInfo'

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
