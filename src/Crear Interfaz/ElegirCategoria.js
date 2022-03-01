import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUIProgress } from '../redux/actions/uiActions';
import { addCategoria } from '../redux/actions/txtIntActions';

const ElegirCategoria = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cat = useSelector((state) => state.objTxtInt.txt_int.categoria);

	const handleStep = (step, path) => {
		dispatch(setUIProgress(step));
		navigate(path);
	};

	const handleCategoryButton = (num) => {
		dispatch(addCategoria(num));
	};

	return (
		<>
			<div className='row mt-5 mb-5'>
				<h1 className='section-title'>
					Elige la categoría
					<a
						className='rounded-circle info-btn-create'
						data-toggle='collapse'
						href='#collapseExample'
						role='button'
						aria-expanded='false'
						aria-controls='collapseExample'
					>
						<i className='bx bx-info-circle icon-info-create'></i>
					</a>
				</h1>
				<div className='row'>
					<div
						className='col-6 offset-3 collapse mb-5 rounded-3'
						id='collapseExample'
					>
						<div className='card card-body'>
							Elige el tipo de página en la que se creará tu interfaz
						</div>
					</div>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-1 d-flex justify-content-center'>
					{/* <button
						className='btn arrow-button-create  rounded-circle'
						onClick={() => handleStep(0)}
					>
						<i class='bx bx-left-arrow'></i>
					</button> */}
				</div>
				<div className='col-10'>
					<div className='row'>
						<div className='row mb-md-5'>
							<div className='col-md-2 col-sm-5 offset-md-1'>
								<button
									className={
										cat === 0
											? 'btn btn-outline-primary btn-cat-create shadow cat-active'
											: 'btn btn-outline-primary btn-cat-create shadow'
									}
									onClick={() => handleCategoryButton(0)}
								>
									<i className='bx bx-home-alt icon-cat-create'></i>
									<br />
									Página principal
								</button>
							</div>
							<div className='col-md-2 col-sm-5'>
								<button
									className={
										cat === 1
											? 'btn btn-outline-primary btn-cat-create shadow cat-active'
											: 'btn btn-outline-primary btn-cat-create shadow'
									}
									onClick={() => handleCategoryButton(1)}
								>
									<i className='bx bxs-contact icon-cat-create'></i>
									<br />
									Contacto
								</button>
							</div>
							<div className='col-md-2 col-sm-5'>
								<button
									className={
										cat === 2
											? 'btn btn-outline-primary btn-cat-create shadow cat-active'
											: 'btn btn-outline-primary btn-cat-create shadow'
									}
									onClick={() => handleCategoryButton(2)}
								>
									<i className='bx bx-news icon-cat-create'></i>
									<br />
									Conócenos
								</button>
							</div>
							<div className='col-md-2 col-sm-5'>
								<button
									className={
										cat === 3
											? 'btn btn-outline-primary btn-cat-create shadow cat-active'
											: 'btn btn-outline-primary btn-cat-create shadow'
									}
									onClick={() => handleCategoryButton(3)}
								>
									<i className='bx bx-cart-alt icon-cat-create'></i>
									<br />
									Carrito
								</button>
							</div>
							<div className='col-md-2 col-sm-5'>
								<button
									className={
										cat === 4
											? 'btn btn-outline-primary btn-cat-create shadow cat-active'
											: 'btn btn-outline-primary btn-cat-create shadow'
									}
									onClick={() => handleCategoryButton(4)}
								>
									<i className='bx bxs-user-account icon-cat-create'></i>
									<br />
									Iniciar sesión
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='col-1 d-flex justify-content-center'>
					<button
						type='button'
						className='btn btn-lg right-button-create'
						onClick={() => handleStep(1, '/crear/ambito')}
					>
						<div className='d-flex'>
							<p>
								Siguiente:
								<br />
								<i>Ámbito</i>
							</p>
							<i className='bx bxs-right-arrow mt-auto mb-auto ms-4'></i>
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default ElegirCategoria;
