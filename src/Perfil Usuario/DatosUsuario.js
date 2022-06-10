import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AlertGeneral from '../Componentes Generales/AlertGeneral';
import ModificarDatosModal from './ModificarDatosModal';

const DatosUsuario = () => {
	const user = useSelector((state) => state.usrData);

	const [modal, setModal] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	if (showAlert) {
		setTimeout(() => {
			setShowAlert(false);
		}, 2500);
	}

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
		<>
			<AlertGeneral show={showAlert} text={'Contraseña actualizada'} />
			<ModificarDatosModal open={modal} onClose={() => setModal(false)} onShowAlert={()=>setShowAlert(true)} />
			<div className='profile-card'>
				<div className='profile-card-title'>
					<div className='profile-card-name'>{user.user}</div>
					<div className='profile-card-title-button'>
						<input type='button' value='Modificar datos' className='profile-card-button' onClick={() => setModal(true)} />
					</div>
				</div>
				<div className='profile-card-body'>
					<p>Correo electrónico: {user.mail} </p>
					<p>
						Tipo de plan:<b style={{ color: '#8080ff' }}> {_plan} </b>
					</p>
					<hr></hr>
				</div>
			</div>
		</>
	);
};

export default DatosUsuario;
