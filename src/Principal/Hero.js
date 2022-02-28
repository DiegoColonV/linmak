import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategoria } from '../redux/actions/txtIntActions';

const iconsCat = [
	<i class='bx bx-home-alt bx-tada icon-create'></i>,
	<i class='bx bxs-contact bx-tada icon-create'></i>,
	<i class='bx bx-news bx-tada icon-create'></i>,
	<i class='bx bx-cart-alt bx-tada icon-create'></i>,
	<i class='bx bxs-user-account bx-tada icon-create'></i>,
];

function Hero() {
	const [cat, setCat] = useState(0);
	const dispatch = useDispatch();

	const handleSelectChange = (event) => {
		setCat(parseInt(event.target.value));
	};

	const handleOnclickCreate = () => {
		dispatch(addCategoria(cat));
	};

	return (
		<div>
			{/* ======= Hero Section ======= */}
			<section id='hero' className='d-flex align-items-center'>
				<div className='container'>
					<div className='row'>
						<div className='row mt-5'>
							<div className='col-md-8'>
								<h1 className='row mb-5'>Empieza a crear</h1>
								<div className='row'>
									<h2 className='col-md-3 col-xs mt-2'>Elige una categoría:</h2>
									<div className='col-md-4 col-xs'>
										<select
											value={cat}
											className='form-select'
											onChange={handleSelectChange}
										>
											<option value='0'>Página principal</option>
											<option value='1'>Contacto</option>
											<option value='2'>Conócenos</option>
											<option value='3'>Carrito</option>
											<option value='4'>Iniciar sesión</option>
										</select>
									</div>
								</div>
								<div className='row d-flex align-items-center'>
									<div className='col-md-2 justify-content-center d-flex mt-2'>
										{iconsCat[cat]}
									</div>
									<div className='col-md-5'>
										<Link to='/crear'>
											<button
												type='button'
												className='btn btn-primary mt-3 btn-lg btn-block btn-create'
												onClick={handleOnclickCreate}
											>
												Crear
											</button>
										</Link>
									</div>
								</div>
							</div>
							<div className='hero-img col-md'>
								<img
									src='img/general/hero-img.png'
									className='img-fluid'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End Hero */}
		</div>
	);
}
export default Hero;
