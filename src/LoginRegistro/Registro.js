import React, { useState } from 'react';

function Registro() {
	const [user, setUser] = useState('');
	const [mail, setMail] = useState('');
	const [pass, setCont] = useState('');
	const [rpass, setRCont] = useState('');

	const [showError, setShowError] = useState(false);
	const [errorText, setErrorText] = useState('');

	const regValidation = () => {
		let isValid = false;
		if (user.length > 1 && mail.length > 1 && pass.length > 1 && rpass.length > 1) {
			if (pass === rpass) isValid = true;
			else setErrorText('Las contraseñas no coinciden');
		} else setErrorText('Todos los campos son obligatorios');

		return isValid;
	};

	const handleUser = (e) => {
		setUser(e.target.value);
	};
	const handleMail = (e) => {
		setMail(e.target.value);
	};
	const handleCont = (e) => {
		setCont(e.target.value);
	};
	const handleRCont = (e) => {
		setRCont(e.target.value);
	};

	const limpiar = () => {
		setUser('')
		setMail('')
		setCont('')
		setRCont('')
	}

	const regg = async (e) => {
		e.preventDefault();
		if (regValidation()) {
			const token = 'log_in_init';
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
				body: JSON.stringify({ nombre: user, correo: mail, password: pass, tipo: 'I' }),
			};
			const data = await fetch('http://25.59.209.228:5000/insert/user', requestOptions);
			const dataJson = await data.json();

			console.log(dataJson)
			limpiar()
		} else setShowError(true);
	};
	return (
		<div>
			<section id='formLogin' className='align-items-center'>
				<div className='container'>
					<div className='row'>
						<h1 className='row'>Registrarse</h1>
						<div className='row mt-2'>
							<form>
								<div className='form-group'>
									<label htmlFor='correo'>Correo Electrónico</label>
									<input type='email' value={mail} className='form-control' id='rcorreo' placeholder='Email' onChange={handleMail} />
								</div>
								<div className='form-group mt-4'>
									<label htmlFor='usuario'>Nombre de usuario</label>
									<input type='text' value={user} className='form-control' id='rusuario' placeholder='Nombre de usuario' onChange={handleUser} />
								</div>
								<div className='form-group mt-4'>
									<label htmlFor='contraseña'>Contraseña</label>
									<input type='password' value={pass} className='form-control' id='rcontrasena' placeholder='Contraseña' onChange={handleCont} />
								</div>
								<div className='form-group mt-4'>
									<label htmlFor='rcontraseña'>Repetir contraseña</label>
									<input type='password' value={rpass} className='form-control' id='rrepcontrasena' placeholder='Repetir contraseña' onChange={handleRCont} />
								</div>
								{showError && (
									<h6 className='mt-4' style={{ color: 'darkred' }}>
										{errorText}
									</h6>
								)}
								<button type='submit' onClick={regg} className='btn btn-outline-primary col-md-12 col-xs-18 mt-5'>
									Registrarse
								</button>
							</form>

							{/* <div className="form-group mt-4">
                                <p className="text-center"> o </p>
                                <button className='bx bxl-google bx-s icon-box-hp mt-3 btn btn-outline-secondary col-md-12 col-xs-18 ingresa-google'> Registrate con google </button>
                            </div>*/}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Registro;
