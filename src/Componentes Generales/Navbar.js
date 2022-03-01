import { NavLink } from 'react-router-dom';
import './estilos_comp_generales.css';

function Navbar() {
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
						<NavLink to='/' className='nav-link float-left'>
							Crear interfaz
						</NavLink>
					</li>
					<li>
						<NavLink to='/conocenos' className='nav-link'>
							Conócenos
						</NavLink>
					</li>
					<li>
						<NavLink to='/loginreg' className='nav-link'>
							Iniciar Sesión
						</NavLink>
					</li>
					<li>
						<NavLink to='/loginreg' className='getstarted'>
							Registrarse
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
