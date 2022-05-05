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
import ElegirCategoria from './Crear Interfaz/ElegirCategoria';
import Main from './Componentes Generales/Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from './redux/actions/userActions';
import EditarInt from './Editar Interfaz/EditarInt';
import EditarEstr from './Editar Interfaz/EditarEstr';
import EditarElem from './Editar Interfaz/EditarElem';

function App() {
	const dispatch = useDispatch();
	const getUserData = async () => {
		let tokenlocal = localStorage.getItem('token');
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tokenlocal}` },
		};
		const data = await fetch('http://25.59.209.228:5000/getuser', requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);
		console.log(tokenlocal);

		if (dataJson.status == 200) {
			const userData = {
				...dataJson.data,
				token: tokenlocal,
				autenticado: true,
			};
			dispatch(userLogin(userData));
		}
	};
	 useEffect(() => { getUserData() }, [])
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />}>
					<Route path='' element={<HomePage />} />
					<Route path='elegir' element={<ElegirInterfaz />} />
					<Route path='conocenos' element={<Conocenos />} />
					<Route path='perfil' element={<PerfilUsuario />} />
					<Route path='loginreg' element={<LoginRegistro />} />
				</Route>
				<Route path='/crear' element={<CrearInt />}>
					<Route path='categoria' element={<ElegirCategoria />} />
					<Route path='ambito' element={<ElegirAmbito />} />
					<Route path='estilo' element={<ElegirEstilo />} />
					<Route path='color' element={<ElegirColor />} />
					<Route path='fuente' element={<ElegirFuente />} />
				</Route>
				<Route path='/editar' element={<EditarInt />}>
					<Route path='estructura' element={<EditarEstr />} />
					<Route path='elementos' element={<EditarElem />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
