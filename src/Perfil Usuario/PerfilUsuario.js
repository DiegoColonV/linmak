import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';
import Carpetas from './Carpetas';
import DatosUsuario from './DatosUsuario';
import './styles.css'; 

/* 
    Clase para mostrar el Perfil del usuario
    En esta clase se muestran los siguientes componentes:
        * Tarjeta con los datos del usuario
        * Listado de carpetas
        * Contenedor de las páginas para cada carpeta
    
*/

const PerfilUsuario = () => {

	return (
		<div className='container profile'>
			<DatosUsuario />
			<Carpetas />
		</div>
	);
};

export default PerfilUsuario;
