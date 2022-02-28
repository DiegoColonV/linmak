import { NavLink, Outlet } from 'react-router-dom';
import './crearint.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function CrearInt() {
	const cat = useSelector((state) => state.objTxtInt.txt_int);
	const [step, setStep] = useState(0);

	const handleStep = (clicked) => {
		setStep(clicked);
		console.log(step);
	};

	return (
		<>
			<section id='create'>
				<div className='container mt-3'>
					<div className='row mt-3'>
						<div className='col-12 offset-md-3'>
							<ol class='breadcrumb'>
								<li class='breadcrumb-item' onClick={() => handleStep(0)}>
									<NavLink to='/' className='breadcrumb-link p-md-4'>
										Categoría
									</NavLink>
								</li>
								<li class='breadcrumb-item' onClick={() => handleStep(1)}>
									<NavLink
										to='/crear/ambito'
										className='breadcrumb-link  p-md-4'
									>
										Ámbito
									</NavLink>
								</li>
								<li class='breadcrumb-item' onClick={() => handleStep(2)}>
									<NavLink
										to='/crear/estilo'
										className='breadcrumb-link  p-md-4'
									>
										Estilo
									</NavLink>
								</li>
								<li class='breadcrumb-item' onClick={() => handleStep(3)}>
									<NavLink
										to='/crear/color'
										className='breadcrumb-link  p-md-4'
									>
										Color
									</NavLink>
								</li>
								<li class='breadcrumb-item' onClick={() => handleStep(4)}>
									<NavLink
										to='/crear/fuente'
										className='breadcrumb-link  p-md-4'
									>
										Fuente
									</NavLink>
								</li>
							</ol>
						</div>
					</div>
					<div className='row'>
						<Outlet />
					</div>
					<div className='row'>
						<div class='progress'>
							<div
								class='progress-bar'
								role='progressbar'
								style={{ width: `${(step * 100) / 5}%` }}
							></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default CrearInt;
