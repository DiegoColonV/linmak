import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUIProgress } from '../redux/actions/uiActions';
import { addAmbito } from '../redux/actions/txtIntActions';
import { useEffect, useState } from 'react';

const dummyAmbitos = [
	{
		id: -1,
		text: ' Elige el ámbito o enfoque...',
		icon: <i className='bx bxs-left-arrow-alt'></i>,
	},
	{ id: 0, text: 'Negocios', icon: <i className='bx bxs-business'></i> },
	{
		id: 1,
		text: 'Bienes Raíces',
		icon: <i className='bx bx-building-house'></i>,
	},
	{
		id: 2,
		text: 'Educación',
		icon: <i className='bx bxs-graduation'></i>,
	},
	{ id: 3, text: 'Comida', icon: <i className='bx bx-food-menu'></i> },
	{ id: 4, text: 'Publicidad', icon: <i className='bx bx-news'></i> },
	{ id: 5, text: 'Entretenimiento', icon: <i className='bx bx-headphone'></i> },
	{ id: 6, text: 'Tecnología', icon: <i className='bx bx-chip'></i> },
	{ id: 7, text: 'Salud', icon: <i className='bx bx-heart'></i> },
	{ id: 8, text: 'Freelance', icon: <i className='bx bx-coffee'></i> },
];

const dummyExample = [
	{ text: 'Negocios', img: '/img/previews/Index/navigator.png' },
	{ text: 'Construcción', img: '/img/previews/Index/constra.png' },
	{ text: 'Salud', img: '/img/previews/Index/novena.png' },
	{ text: 'Portafolio', img: '/img/previews/Index/kross.png' },
	{ text: 'Publicidad', img: '/img/previews/Index/promodise.png' },
	{ text: 'Educación', img: '/img/previews/Index/educenter.png' },
	{ text: 'Eventos', img: '/img/previews/Index/eventre.png' },
	{ text: 'Economía', img: '/img/previews/Index/bitbank.png' },
	{ text: 'Comercio', img: '/img/previews/Index/aviato.png' },
	{ text: 'Comida', img: '/img/previews/Index/restaurant.png' },
	{ text: 'Tecnología', img: '/img/previews/Index/timer.png' },
];

dummyAmbitos.sort((a, b) => {
	let fa = a.text.toLowerCase(),
		fb = b.text.toLowerCase();

	if (fa < fb) {
		return -1;
	}
	if (fa > fb) {
		return 1;
	}
	return 0;
});

const ElegirAmbito = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const amb = useSelector((state) => state.objTxtInt.txt_int.ambito);
	const [selectedAmb, setSelectedAmb] = useState(dummyAmbitos[0]);
	const [otroDisabled, setOtroDisabled] = useState(true);
	const [textOtro, setTextOtro] = useState(amb);
	const [indexImg, setIndexImg] = useState([0, 1, 2]);

	useEffect(() => { get3rands() }, [])

	const handleStep = (step, path) => {
		dispatch(setUIProgress(step));
		navigate(path);
	};

	const handleAmbitSave = () => {
		handleStep(2, '/crear/estilo');
		//if (selectedAmb.id !== -1) {
		//	if (selectedAmb.id === -2) {
				if (textOtro !== '') {
					dispatch(addAmbito(textOtro.trim()));
				}
		//	} else dispatch(addAmbito(selectedAmb.text));
		//}
	};

	const handleInputOtro = (event) => {
		setTextOtro(event.target.value);
	};

	const handleSelectAmbit = (event) => {
		if (parseInt(event.target.value) !== -2) {
			setSelectedAmb(dummyAmbitos.find((obj) => obj.id === parseInt(event.target.value)));
			setOtroDisabled(true);
		} else {
			setSelectedAmb({ id: -2, text: 'Otro' });
			setOtroDisabled(false);
		}
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
					Elige el ámbito o enfoque
					<a className='rounded-circle info-btn-create' data-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'>
						<i className='bx bx-info-circle icon-info-create'></i>
					</a>
				</h1>
				<div className='row'>
					<div className='col-6 offset-3 collapse mb-5 rounded-3' id='collapseExample'>
						<div className='card card-body'>Elige a qué te dedicas tú o tu empresa, qué comercializa o la indistria a la que pertenece.</div>
					</div>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-md-1 col-xs-5 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg left-button-create' onClick={() => handleStep(0, '/crear/categoria')}>
						<div className='d-flex'>
							<i className='bx bxs-left-arrow mt-auto mb-auto me-4'></i>
							<p>
								Anterior:
								<br />
								<i>Categoría</i>
							</p>
						</div>
					</button>
				</div>
				<div className='col-10'>
					<div className='row d-flex justify-content-center mb-5'>
						<div className='col-md-8 col-xs-12'>
							{/*<div className='row'>
								
								<div className='col-md-10 col-xs-12'>
									<select
										defaultValue={-1}
										className='selectpicker border-0 px-4 py-4 rounded shadow-sm option-ambit w-100'
										aria-label='Elegir ámbito'
										onChange={handleSelectAmbit}
									>
										{dummyAmbitos.map((ambito) => (
											<option key={ambito.id} value={ambito.id}>
												{ambito.text}
											</option>
										))}
										<option value={-2}>OTRO</option>
									</select>
								</div>
										
								{otroDisabled && (
									<div className='card col-2 rounded shadow-sm border-0  d-flex justify-content-center' hidden={otroDisabled}>
										<div className='card-body mx-auto card-ambit'>{selectedAmb.icon}</div>
									</div>
								{/*)}
								<small id='txtHelp' className='form-text text-muted'>
									{amb !== '' ? `Guardado: ${amb}` : ''}
								</small>
							</div>*/}
							{/*{!otroDisabled && (*/}
								<div className='row mb-5 justify-content-center align-items-center'>
									<div className='col-10'>
										<input
											type='text'
											className='form-control-lg border-0 shadow-sm w-100'
											placeholder='Ámbito'
											//disabled={otroDisabled}
											value={textOtro}
											onChange={handleInputOtro}
										></input>
									</div>
								</div>
							{/*)}*/}
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
					<button type='button' className='btn btn-lg right-button-create' onClick={handleAmbitSave}>
						<div className='d-flex'>
							<p>
								Siguiente:
								<br />
								<i>Estilo</i>
							</p>
							<i className='bx bxs-right-arrow mt-auto mb-auto ms-4'></i>
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default ElegirAmbito;
