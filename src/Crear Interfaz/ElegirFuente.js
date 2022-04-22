import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUIProgress } from '../redux/actions/uiActions';
import { addFuente } from '../redux/actions/txtIntActions';
import { useState } from 'react';
import ModalFuente from './ModalFuente';

const dummyExample = [
	{ text: 'Negocios', img: '/img/ejemplos/business.png' },
	{ text: 'Construcción', img: '/img/ejemplos/const.png' },
	{ text: 'Educación', img: '/img/ejemplos/education.png' },
	{ text: 'Comida', img: '/img/ejemplos/food.png' },
	{ text: 'Marketing', img: '/img/ejemplos/marketing.jpg' },
	{ text: 'Salud', img: '/img/ejemplos/med.png' },
	{ text: 'Tecnología', img: '/img/ejemplos/tech.png' },
];

const initialObjfont = {
	category: 1,
	space: 2,
	size: 2,
	thickness: 2,
	shape: 2,
};

const ElegirEstilo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const fue = useSelector((state) => state.objTxtInt.txt_int.fuente);
	let initialObj = {};

	if (fue === null)
		initialObj = {
			category: 1,
			space: 2,
			size: 2,
			thickness: 2,
			shape: 2,
		};
	else initialObj = fue;

	const [objFont, setObjFont] = useState(initialObj);

	const handleStep = (step, path) => {
		dispatch(setUIProgress(step));
		navigate(path);
	};

	const handleFontSave = () => {
		dispatch(addFuente(objFont));
	};

	const handleRangeCategory = (event) => {
		setObjFont({ ...objFont, category: parseInt(event.target.value) });
	};
	const handleRangeSpace = (event) => {
		setObjFont({ ...objFont, space: parseInt(event.target.value) });
	};
	const handleRangeSize = (event) => {
		setObjFont({ ...objFont, size: parseInt(event.target.value) });
	};
	const handleRangeThickness = (event) => {
		setObjFont({ ...objFont, thickness: parseInt(event.target.value) });
	};
	const handleRangeShape = (event) => {
		setObjFont({ ...objFont, shape: parseInt(event.target.value) });
	};

	return (
		<>
			<ModalFuente />
			<div className='row mb-3 mt-5'>
				<h1 className='section-title'>
					Elige los valores de la fuente
					<a className='rounded-circle info-btn-create' data-toggle='modal' data-target='.bd-example-modal-lg' role='button'>
						<i className='bx bx-info-circle'></i>
					</a>
				</h1>
			</div>
			<div className='row mb-5'>
				<div className='col-md-1 col-xs-5 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg left-button-create' onClick={() => handleStep(3, '/crear/color')}>
						<div className='d-flex'>
							<i className='bx bxs-left-arrow mt-auto mb-auto me-4'></i>
							<p>
								Anterior:
								<br />
								<i>Color</i>
							</p>
						</div>
					</button>
				</div>
				<div className='col-10'>
					<div className='row d-flex justify-content-center mb-5'>
						<div className='col-md-9 col-xs-12'>
							<label htmlFor='categoria' className='form-label'>
								<h4>
									<b>Categoría principal</b>
								</h4>
							</label>
							<select
								id='categoria'
								defaultValue={objFont.category}
								className='selectpicker border-0 px-3 py-3 rounded shadow-sm option-ambit w-100'
								aria-label='Elegir ámbito'
								onChange={handleRangeCategory}
							>
								<option value={0}>Con adorno</option>
								<option value={1}>Sin adorno</option>
								<option value={2}>Decorativa</option>
								<option value={3}>Caligráfica</option>
							</select>
						</div>
					</div>
					<div className='row d-flex justify-content-center mb-5'>
						<div className='col-md-4 col-xs-12'>
							<label htmlFor='espaciado' className='form-label'>
								<h4>
									<b>Espaciado</b>
								</h4>
							</label>
							<input type='range' className='form-range' min='1' max='3' id='espaciado' defaultValue={objFont.space} onChange={handleRangeSpace} />
							<div className='row create-font-rangenumbers'>
								<div className={`col-4 ${objFont.space === 1 ? 'create-font-rangenumbers_active' : ''}`}>1</div>
								<div className={`col-4 text-center ${objFont.space === 2 ? 'create-font-rangenumbers_active' : ''}`}>2</div>
								<div className={`col-4 text-end ${objFont.space === 3 ? 'create-font-rangenumbers_active' : ''}`}>3</div>
							</div>
						</div>
						<div className='col-md-1' />
						<div className='col-md-4 col-xs-12'>
							<label htmlFor='tamano' className='form-label'>
								<h4>
									<b>Tamaño</b>
								</h4>
							</label>
							<input type='range' className='form-range' min='1' max='3' id='tamano' defaultValue={objFont.size} onChange={handleRangeSize} />
							<div className='row create-font-rangenumbers'>
								<div className={`col-4 ${objFont.size === 1 ? 'create-font-rangenumbers_active' : ''}`}>1</div>
								<div className={`col-4 text-center ${objFont.size === 2 ? 'create-font-rangenumbers_active' : ''}`}>2</div>
								<div className={`col-4 text-end ${objFont.size === 3 ? 'create-font-rangenumbers_active' : ''}`}>3</div>
							</div>
						</div>
					</div>

					<div className='row d-flex justify-content-center mb-5'>
						<div className='col-md-4 col-xs-12'>
							<label htmlFor='grosor' className='form-label'>
								<h4>
									<b>Grosor</b>
								</h4>
							</label>
							<input type='range' className='form-range' min='1' max='3' id='grosor' defaultValue={objFont.thickness} onChange={handleRangeThickness} />
							<div className='row create-font-rangenumbers'>
								<div className={`col-4 ${objFont.thickness === 1 ? 'create-font-rangenumbers_active' : ''}`}>1</div>
								<div className={`col-4 text-center ${objFont.thickness === 2 ? 'create-font-rangenumbers_active' : ''}`}>2</div>
								<div className={`col-4 text-end ${objFont.thickness === 3 ? 'create-font-rangenumbers_active' : ''}`}>3</div>
							</div>
						</div>
						<div className='col-md-1' />
						<div className='col-md-4 col-xs-12'>
							<label htmlFor='forma' className='form-label'>
								<h4>
									<b>Forma</b>
								</h4>
							</label>
							<input type='range' className='form-range' min='1' max='3' id='forma' defaultValue={objFont.shape} onChange={handleRangeShape} />
							<div className='row create-font-rangenumbers'>
								<div className={`col-4 ${objFont.shape === 1 ? 'create-font-rangenumbers_active' : ''}`}>1</div>
								<div className={`col-4 text-center ${objFont.shape === 2 ? 'create-font-rangenumbers_active' : ''}`}>2</div>
								<div className={`col-4 text-end ${objFont.shape === 3 ? 'create-font-rangenumbers_active' : ''}`}>3</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-1 col-xs-5 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg right-button-create' onClick={handleFontSave}>
						<div className='d-flex'>
							<p>
								GENERAR
								<br />
								INTERFAZ
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
