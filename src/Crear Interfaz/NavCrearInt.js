import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUIProgress } from '../redux/actions/uiActions';

const NavCrearInt = () => {
	const dispatch = useDispatch();

	const handleStep = (clicked) => {
		dispatch(setUIProgress(clicked));
	};

	useEffect(() => {
		handleStep(1);
	}, []);

	return (
		<nav id='navbar' className='navbar navbar-expand-lg m-auto pt-3'>
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
				<ol className='breadcrumb'>
					<li className='breadcrumb-item' onClick={() => handleStep(0)}>
						<NavLink to='/crear/categoria' className='breadcrumb-link p-md-4'>
							Categoría
						</NavLink>
					</li>
					<li className='breadcrumb-item' onClick={() => handleStep(1)}>
						<NavLink to='/crear/ambito' className='breadcrumb-link  p-md-4'>
							Ámbito
						</NavLink>
					</li>
					<li className='breadcrumb-item' onClick={() => handleStep(2)}>
						<NavLink to='/crear/estilo' className='breadcrumb-link  p-md-4'>
							Estilo
						</NavLink>
					</li>
					<li className='breadcrumb-item' onClick={() => handleStep(3)}>
						<NavLink to='/crear/color' className='breadcrumb-link  p-md-4'>
							Color
						</NavLink>
					</li>
					<li className='breadcrumb-item' onClick={() => handleStep(4)}>
						<NavLink to='/crear/fuente' className='breadcrumb-link  p-md-4'>
							Fuente
						</NavLink>
					</li>
				</ol>
			</div>
		</nav>
	);
};

export default NavCrearInt;
