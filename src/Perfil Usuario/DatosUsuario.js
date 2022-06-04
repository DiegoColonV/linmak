import React from 'react';
import { useSelector } from 'react-redux';

const DatosUsuario = () => {
	const user = useSelector((state) => state.usrData);
	let _plan = '';

	switch (user.plan) {
		case 'I':
			_plan = 'Inicial';
			break;
		case 'A':
			_plan = 'Avanzado';
			break;
		case 'LM':
			_plan = 'Linmak';
			break;
		default:
			break;
	}

	return (
		<div className='profile-card'>
			<div className='profile-card-title'>
				<div className='profile-card-name'>{user.user}</div>
				<div className='profile-card-title-button'>
					<input type='button' value='Modificar datos' className='profile-card-button' />
				</div>
			</div>
			<div className='profile-card-body'>
				<p>Correo electrónico: {user.mail} </p>
				<p>Tipo de plan:<b style={{color: '#8080ff'}}> {_plan} </b></p>
				<hr></hr>
			</div>
		</div>
	);
};

export default DatosUsuario;
