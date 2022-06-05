import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { userLogin } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
function Login() {
	const dispatch = useDispatch();
	const obj = useSelector((state) => state.usrData);
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePass = (e) => {
		setPass(e.target.value);
	};

	const loginn = async (e) => {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${obj.token}` },
			body: JSON.stringify({ correo: email, password: pass }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
		const dataJson = await data.json();

		console.log(dataJson);
		if (dataJson.status == 200) {
			const userData = {
				...dataJson.ses_data,
				token: dataJson.token,
				autenticado: true,
			};
			dispatch(userLogin(userData));
			localStorage.setItem('token', dataJson.token);
			navigate('/');
		}
	};
	return (
		<div id='formLogin' className='row d-flex align-items-center justify-content-center'>
			<h1 className='row'>Inicia sesión</h1>
			<div className='row mt-2'>
				<form className='p-0'>
					<div className='form-group'>
						<label htmlFor='correo'>Correo Electrónico</label>
						<input type='email' className='form-control' id='lcorreo' name='lcorreo' placeholder='Email' onChange={handleEmail} />
					</div>
					<div className='form-group mt-4'>
						<label htmlFor='contraseña'>Contraseña</label>
						<input type='password' className='form-control' id='lcontrasena' name='lcontrasena' placeholder='Contraseña' onChange={handlePass} />
					</div>
					<button type='submit' onClick={loginn} className='btn btn-primary col-md-12 col-xs-18 mt-5 btn-color-change'>
						Ingresar
					</button>
				</form>
				{/* <div className="form-group mt-4">
                                <p className="text-center"> o </p>
                                <button className='bx bxl-google bx-s icon-box-hp mt-3 btn btn-outline-secondary col-md-12 col-xs-18 ingresa-google'> Ingresa con google </button>
                            </div>*/}
			</div>
		</div>
	);
}
export default Login;
