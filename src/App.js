import logo from './logo.svg';
import './App.css';
import Header from './Componentes Generales/Header';
import Footer from './Componentes Generales/Footer';
import Conocenos from './Conocenos/Conocenos';
import HomePage from './home_page/home_page';
import ElegirInterfaz from './Elegir_Interfaz/ElegirInterfaz';
import PerfilUsuario from './Perfil Usuario/PerfilUsuario';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './LoginRegistro/Login';
import Registro from './LoginRegistro/Registro';
import LoginRegistro from './LoginRegistro/LoginRegistro';

function App() {
    return (
    <div>
      {/* ======= Header ======= */}
      <Header />
      <Router>
        <Routes>
          <Route path="/elegir" element={<ElegirInterfaz />}/>
          <Route path="/conocenos" element={<Conocenos />}/>
          <Route path="/loginreg" element={<LoginRegistro />}/>
          <Route path="/perfil" element={<PerfilUsuario />}/>
          <Route exact path="/" element={<HomePage />}/>

        </Routes>
      </Router>
      {/* ======= Footer ======= */}
      <Footer />
    </div>
  );
}

export default App;
