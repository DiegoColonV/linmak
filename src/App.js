import logo from './logo.svg';
import './App.css';
import Header from './home_page/Header';
import Footer from './home_page/Footer';
import Conocenos from './home_page/Conocenos';
import HomePage from './home_page/home_page';
import ElegirInterfaz from './Elegir_Interfaz/ElegirInterfaz';

function App() {
  return (
    <div>
      {/* ======= Header ======= */}
      <Header />
      <ElegirInterfaz />
      {/* ======= Footer ======= */}
      <Footer />
    </div>
  );
}

export default App;
