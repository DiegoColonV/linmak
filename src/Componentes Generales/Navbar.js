import { NavLink } from 'react-router-dom';
import './estilos_comp_generales.css';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../redux/actions/userActions';
import { useNavigate } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.usrData);
	const salir = () => {
		dispatch(userLogout())
		localStorage.setItem('token', "log_in_init");
		navigate("/")
	}
	return (
		<nav id='navbar' className='navbar navbar-expand-lg'>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarTogglerDemo01'
				aria-controls='navbarTogglerDemo01'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<i className='bx bx-menu' />
			</button>
			<div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
				<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
					<li>
						<NavLink to='/crear/categoria' className='nav-link float-left'>
							Crear interfaz
						</NavLink>
					</li>
					<li>
						<NavLink to='/conocenos' className='nav-link'>
							Conócenos
						</NavLink>
					</li>
					{!user.autenticado ? (
						<>
							<li>
								<NavLink to='/loginreg' className='nav-link'>
									Iniciar Sesión
								</NavLink>
							</li>
							<li>
								<NavLink to='/loginreg' className='getstarted m-0 ms-1'>
									Registrarse
								</NavLink>
							</li>
						</>
					) :
						<>
							<li>
								<NavLink to='/perfil' className='nav-link'>
									<i className='bx bxs-user icono-usuario-login'></i>
								</NavLink>
							</li>
							<li>
								<div className="dropdown">
									<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										
									</button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<button className="dropdown-item" onClick={ salir }>Cerrar sesión</button>
									</div>
								</div>
							</li>
						</>
						
					}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
