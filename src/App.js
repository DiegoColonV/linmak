import logo from './logo.svg';
import './App.css';
import Header from './Componentes Generales/Header';
import Footer from './Componentes Generales/Footer';
import Conocenos from './Conocenos/Conocenos';
import HomePage from './home_page/home_page';
import ElegirInterfaz from './Elegir_Interfaz/ElegirInterfaz';
import PerfilUsuario from './Perfil Usuario/PerfilUsuario';
import { Route, Routes, Link ,BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* ======= Header ======= */}
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/elegir" element={<ElegirInterfaz />}/>
          <Route exact path="/conocenos" element={<Conocenos />} />
        </Routes>
      </Router>
      {/* ======= Footer ======= */}
      <Footer />
    </div>
  );
}

export default App;
