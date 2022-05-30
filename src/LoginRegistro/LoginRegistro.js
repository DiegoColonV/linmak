import { useState } from 'react';
import AlertGeneral from '../Componentes Generales/AlertGeneral';
import Login from './Login';
import Registro from './Registro';
import './stilos.css';

function LoginRegistro() {
	const [view, setView] = useState(1);

	const [showAlert, setShowAlert] = useState(false);

	if (showAlert) {
		setTimeout(() => {
			setShowAlert(false);
		}, 2000);
	}

	const onSetView = (val) => {
		setView(val);
	};

	const onShowAlert = () => {
		setShowAlert(true);
	};

	return (
		<div className='row position-relative'>
			<AlertGeneral show={showAlert} text='Usuario registrado con éxito' />
			<div className='col-6 ' data-aos='fade-right' data-aos-delay={300}>
				<div className='banner-login-container'>
					<img className='banner-login' src='img/general/details-3.png'></img>
				</div>
			</div>
			<div className='col-6' data-aos='fade-up' data-aos-delay={300}>
				<div className='row d-flex justify-content-center align-items-center'>
					<div className='col-8'>
						<div className='row d-flex justify-content-end pe-3' style={{ marginTop: 200 }}>
							<div className='col-3'>
								<button onClick={() => setView(1)} className={`btn tab-login ${view === 1 ? 'active' : ''}`}>
									Inicia sesión
								</button>
							</div>
							<div className='col-3'>
								<button onClick={() => setView(2)} className={`btn tab-login ${view === 2 ? 'active' : ''}`}>
									Regístrate
								</button>
							</div>
						</div>
						{view === 1 ? <Login /> : <Registro onSetView={onSetView} onShowAlert={onShowAlert} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginRegistro;
