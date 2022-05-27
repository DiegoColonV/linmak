import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUIProgress } from '../redux/actions/uiActions';
import { addEstilo } from '../redux/actions/txtIntActions';
import { useEffect, useState } from 'react';

const dummyExample = [
	{ text: 'Original', img: '/img/previews/Compressed/navigator.png' },
	{ text: 'Urbano', img: '/img/previews/Compressed/constra.png' },
	{ text: 'Ordenado', img: '/img/previews/Compressed/novena.png' },
	{ text: 'Colorido', img: '/img/previews/Compressed/kross.png' },
	{ text: 'Moderno', img: '/img/previews/Compressed/promodise.png' },
	{ text: 'Profesional', img: '/img/previews/Compressed/educenter.png' },
	{ text: 'Atractivo', img: '/img/previews/Compressed/eventre.png' },
	{ text: 'Formal', img: '/img/previews/Compressed/bitbank.png' },
	{ text: 'Sofisticado', img: '/img/previews/Compressed/aviato.png' },
	{ text: 'Clásico', img: '/img/previews/Compressed/restaurant.png' },
	{ text: 'Casual', img: '/img/previews/Compressed/brandi.png' },
	{ text: 'Minimalista', img: '/img/previews/Compressed/timer.png' },
];

const ElegirEstilo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const est = useSelector((state) => state.objTxtInt.txt_int.estilo);
	const [indexImg, setIndexImg] = useState([0, 1, 2]);
	const [text, setText] = useState(est);

	useEffect(() => { get3rands() }, [])

	const handleStep = (step, path) => {
		dispatch(setUIProgress(step));
		navigate(path);
	};

	const handleStyleSave = () => {
		handleStep(3, '/crear/color');
		if (text !== '') {
			dispatch(addEstilo(text.trim()));
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
					Describe el estilo
					<a className='rounded-circle info-btn-create' data-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'>
						<i className='bx bx-info-circle icon-info-create'></i>
					</a>
				</h1>
				<div className='row'>
					<div className='col-6 offset-3 collapse mb-5 rounded-3' id='collapseExample'>
						<div className='card card-body'>Escribe como quieres que sea el estilo o tipo de diseño que tenga tu interfaz.</div>
					</div>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-md-1 col-xs-5 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg left-button-create' onClick={() => handleStep(1, '/crear/ambito')}>
						<div className='d-flex'>
							<i className='bx bxs-left-arrow mt-auto mb-auto me-4'></i>
							<p>
								Anterior:
								<br />
								<i>Ámbito</i>
							</p>
						</div>
					</button>
				</div>
				<div className='col-10'>
					<div className='row d-flex justify-content-center mb-5'>
						<div className='col-md-7 col-xs-12'>
							<input type='text' className='form-control form-control-lg' value={text} placeholder='Describe el tipo de diseño que prefieres' onChange={handleInput}></input>
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
										<img className='card-img-top preview-fix' src={dummyExample[indexImg[0]].img} alt='Card image cap' />
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
										<img className='card-img-top preview-fix' src={dummyExample[indexImg[1]].img} alt='Card image cap' />
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
										<img className='card-img-top preview-fix' src={dummyExample[indexImg[2]].img} alt='Card image cap' />
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
					<button type='button' className='btn btn-lg right-button-create' onClick={handleStyleSave}>
						<div className='d-flex'>
							<p>
								Siguiente:
								<br />
								<i>Color</i>
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
