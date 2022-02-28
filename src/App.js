import Header from './Componentes Generales/Header';
import Footer from './Componentes Generales/Footer';
import Conocenos from './Conocenos/Conocenos';
import HomePage from './Principal/HomePage';
import ElegirInterfaz from './Elegir_Interfaz/ElegirInterfaz';
import PerfilUsuario from './Perfil Usuario/PerfilUsuario';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoginRegistro from './LoginRegistro/LoginRegistro';
import CrearInt from './Crear Interfaz/CrearInt';
import ElegirAmbito from './Crear Interfaz/ElegirAmbito';
import ElegirEstilo from './Crear Interfaz/ElegirEstilo';
import ElegirColor from './Crear Interfaz/ElegirColor';
import ElegirFuente from './Crear Interfaz/ElegirFuente';

function App() {
	return (
		<div>
			{/* ======= Header ======= */}
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/elegir' element={<ElegirInterfaz />} />
				<Route path='/conocenos' element={<Conocenos />} />
				<Route path='/perfil' element={<PerfilUsuario />} />
				<Route path='/loginreg' element={<LoginRegistro />} />
				<Route path='/crear' element={<CrearInt />}>
					<Route path='ambito' element={<ElegirAmbito />} />
					<Route path='estilo' element={<ElegirEstilo />} />
					<Route path='color' element={<ElegirColor />} />
					<Route path='fuente' element={<ElegirFuente />} />
				</Route>
			</Routes>
			{/* ======= Footer ======= */}
			<Footer />
		</div>
	);
}

export default App;
