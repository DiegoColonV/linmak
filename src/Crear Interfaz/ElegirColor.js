import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUIProgress } from '../redux/actions/uiActions';
import { addColor } from '../redux/actions/txtIntActions';
import { useState } from 'react';

const dummyExample = [
	{ text: 'Azúl frío', img: '/img/ejemplos/paletas/azul frio.png' },
	{ text: 'Naranja cálido', img: '/img/ejemplos/paletas/naranja calido.png' },
	{ text: 'Verde pastel', img: '/img/ejemplos/paletas/verde pastel.png' },
	{ text: 'Arcoíris', img: '/img/ejemplos/paletas/arcoiris.png' },
	{ text: 'Espaciales', img: '/img/ejemplos/paletas/espacial.png' },
	{ text: 'Infantiles', img: '/img/ejemplos/paletas/infantil.png' },
	{ text: 'Morado brillante', img: '/img/ejemplos/paletas/morado brillante.png' },
	{ text: 'Naranja brillante', img: '/img/ejemplos/paletas/naranja brillante.png' },
	{ text: 'Oscuros', img: '/img/ejemplos/paletas/oscuros.png' },
	{ text: 'Pastel', img: '/img/ejemplos/paletas/pastel.png' },
	{ text: 'Rojos nocturnos', img: '/img/ejemplos/paletas/rojos nocturnos.png' },
	{ text: 'Verde y azul', img: '/img/ejemplos/paletas/verde y azul.png' },
];

const ElegirEstilo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const col = useSelector((state) => state.objTxtInt.txt_int.color);
	// const [indexImg, setIndexImg] = useState([
	// 	Math.floor(Math.random() * dummyExample.length),
	// 	Math.floor(Math.random() * dummyExample.length),
	// 	Math.floor(Math.random() * dummyExample.length),
	// ]);
	const [indexImg, setIndexImg] = useState([0, 1, 2]);
	const [text, setText] = useState(col);

	const handleStep = (step, path) => {
		dispatch(setUIProgress(step));
		navigate(path);
	};

	const handleColorSave = () => {
		handleStep(4, '/crear/fuente');
		if (text !== '') {
			dispatch(addColor(text.trim()));
		}
	};

	const handleInput = (event) => {
		setText(event.target.value);
	};

	const get3rands = () => {
		let arr = [];
		arr[0] = Math.floor(Math.random() * dummyExample.length);
		while (true) {
			arr[1] = Math.floor(Math.random() * dummyExample.length);
			if (arr[1] !== arr[0]) {
				break;
			}
		}
		while (true) {
			arr[2] = Math.floor(Math.random() * dummyExample.length);
			if (arr[2] !== arr[0] && arr[2] !== arr[1]) {
				break;
			}
		}
		setIndexImg(arr);
	};

	return (
		<>
			<div className='row mt-5 mb-3'>
				<h1 className='section-title'>
					Describe la paleta de colores
					<a className='rounded-circle info-btn-create' data-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'>
						<i className='bx bx-info-circle icon-info-create'></i>
					</a>
				</h1>
				<div className='row'>
					<div className='col-6 offset-3 collapse mb-5 rounded-3' id='collapseExample'>
						<div className='card card-body'>
							Escribe el o los colores que quieres que lleve tu página, puedes describir la paleta utilizando temperaturas, estaciones del año, sentimientos, tonos, etc.
						</div>
					</div>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-md-1 col-xs-5 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg left-button-create' onClick={() => handleStep(2, '/crear/estilo')}>
						<div className='d-flex'>
							<i className='bx bxs-left-arrow mt-auto mb-auto me-4'></i>
							<p>
								Anterior:
								<br />
								<i>Estilo</i>
							</p>
						</div>
					</button>
				</div>
				<div className='col-10'>
					<div className='row d-flex justify-content-center mb-5'>
						<div className='col-md-7 col-xs-12'>
							<input
								type='text'
								className='form-control form-control-lg'
								value={text}
								placeholder='Describe el o los colores que quieres en tu interfaz'
								onChange={handleInput}
							></input>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='row'>
							<div className='col-2 offset-lg-2 mt-auto mb-auto'>
								<h3>Ejemplos:</h3>
							</div>
							<div className='col'>
								<a role='button' className='btn rounded-circle info-btn-create' onClick={get3rands}>
									<i className='bx bx-revision icon-info-create'></i>
								</a>
							</div>
						</div>
						<div className='row d-flex justify-content-center align-middle'>
							<div className='col-md-3 col-xs-10 mt-4'>
								<div className='card profile-card-5'>
									<div className='card-img-block'>
										<img className='card-img-top' src={dummyExample[indexImg[0]].img} alt='Card image cap' />
									</div>
									<div className='card-body pt-0'>
										<h5 className='card-title'>
											<i>"{dummyExample[indexImg[0]].text}"</i>
										</h5>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-xs-10 mt-4'>
								<div className='card profile-card-5'>
									<div className='card-img-block'>
										<img className='card-img-top' src={dummyExample[indexImg[1]].img} alt='Card image cap' />
									</div>
									<div className='card-body pt-0'>
										<h5 className='card-title'>
											<i>"{dummyExample[indexImg[1]].text}"</i>
										</h5>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-xs-10 mt-4'>
								<div className='card profile-card-5'>
									<div className='card-img-block'>
										<img className='card-img-top' src={dummyExample[indexImg[2]].img} alt='Card image cap' />
									</div>
									<div className='card-body pt-0'>
										<h5 className='card-title'>
											<i>"{dummyExample[indexImg[2]].text}"</i>
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-1 col-xs-5 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg right-button-create' onClick={handleColorSave}>
						<div className='d-flex'>
							<p>
								Siguiente:
								<br />
								<i>Fuente</i>
							</p>
							<i className='bx bxs-right-arrow mt-auto mb-auto ms-4'></i>
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default ElegirEstilo;
