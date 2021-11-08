import logo from './logo.svg';
import './App.css';
import Header from './Componentes Generales/Header';
import Footer from './Componentes Generales/Footer';
import Conocenos from './Conocenos/Conocenos';
import HomePage from './home_page/home_page';
import ElegirInterfaz from './Elegir_Interfaz/ElegirInterfaz';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* ======= Header ======= */}
      <Header />
      <Router>
        <Routes>
          <Route exact path="/elegir" element={<ElegirInterfaz />}/>
          <Route exact path="/" element={<HomePage />}/>

        </Routes>
      </Router>
      {/* ======= Footer ======= */}
      <Footer />
    </div>
  );
}

export default App;
