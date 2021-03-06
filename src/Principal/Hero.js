import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategoria } from '../redux/actions/txtIntActions';

const iconsCat = [
	<i className='bx bx-home-alt bx-tada icon-create'></i>,
	<i className='bx bxs-contact bx-tada icon-create'></i>,
	<i className='bx bx-news bx-tada icon-create'></i>,
	<i className='bx bx-cart-alt bx-tada icon-create'></i>,
	<i className='bx bxs-user-account bx-tada icon-create'></i>,
];

function Hero({openModal}) {
	const [cat, setCat] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSelectChange = (event) => {
		setCat(parseInt(event.target.value));
	};

	const handleOnclickCreate = () => {
		dispatch(addCategoria(cat));
		navigate('/crear/ambito');
	};

	return (
		<div>
			{/* ======= Hero Section ======= */}
			<section id='hero' className='d-flex align-items-center'>
				<div className='container'>
					<div className='row mt-5'>
						<div className='col-md-6'>
							<h1 className='row mb-5'>
								<div className='col-8'>Empieza a crear </div>
								<div className='col'>
									<i className='bx bxs-help-circle' onClick={openModal} style={{ cursor: 'pointer' }}></i>
								</div>
							</h1>
							<div className='row'>
								<h2 className='col-md-4 col-xs mt-2'>Elige una categoría:</h2>
								<div className='col-md-4 col-xs'>
									<select value={cat} className='form-select' onChange={handleSelectChange}>
										<option value='0'>Página principal</option>
										<option value='1'>Contacto</option>
										<option value='2'>Conócenos</option>
										{/* <option value='3'>Carrito</option> */}
										<option value='4'>Iniciar sesión</option>
									</select>
								</div>
							</div>
							<div className='row d-flex align-items-center'>
								<div className='col-md-2 justify-content-center d-flex mt-2'>{iconsCat[cat]}</div>
								<div className='col-md-6'>
									<button type='button' className='btn btn-primary mt-3 btn-lg btn-block btn-create' onClick={handleOnclickCreate}>
										Crear
									</button>
								</div>
							</div>
						</div>
						<div className='col-md-6 d-md-flex flex-md-column align-items-stretch order-1 order-lg-2 hero-img'>
							<img src='img/general/hero-img.png' className='img-fluid' alt='' />
						</div>
					</div>
				</div>
			</section>
			{/* End Hero */}
		</div>
	);
}
export default Hero;
