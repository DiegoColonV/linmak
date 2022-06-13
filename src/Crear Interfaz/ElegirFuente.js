import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUIProgress } from '../redux/actions/uiActions';
import { addFuente } from '../redux/actions/txtIntActions';
import { addOptionsColor, addOptionsFont, addOptionsInt } from '../redux/actions/selectedIntActions';
import { useState } from 'react';
import ModalFuente from './ModalFuente';
import { Alert } from 'react-bootstrap';

const ElegirEstilo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const fue = useSelector((state) => state.objTxtInt.txt_int.fuente);
	const obj = useSelector((state) => state.objTxtInt.txt_int);

	const [error, setError] = useState('');

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
	const [loading, setLoading] = useState(false);

	const handleStep = (step, path) => {
		dispatch(setUIProgress(step));
		navigate(path);
	};

	const handleRangeCategory = (event) => {
		setObjFont({ ...objFont, category: event.target.value });
		dispatch(addFuente({ ...objFont, category: event.target.value }));
	};
	const handleRangeSpace = (event) => {
		setObjFont({ ...objFont, space: parseInt(event.target.value) });
		dispatch(addFuente({ ...objFont, space: parseInt(event.target.value) }));
	};
	const handleRangeSize = (event) => {
		setObjFont({ ...objFont, size: parseInt(event.target.value) });
		dispatch(addFuente({ ...objFont, size: parseInt(event.target.value) }));
	};
	const handleRangeThickness = (event) => {
		setObjFont({ ...objFont, thickness: parseInt(event.target.value) });
		dispatch(addFuente({ ...objFont, thickness: parseInt(event.target.value) }));
	};
	const handleRangeShape = (event) => {
		setObjFont({ ...objFont, shape: parseInt(event.target.value) });
		dispatch(addFuente({ ...objFont, shape: parseInt(event.target.value) }));
	};

	const fillOptions = (colors, fonts, ints) => {
		dispatch(addOptionsColor(colors));
		dispatch(addOptionsFont(fonts));
		dispatch(addOptionsInt(ints));
		navigate('/crear/elegir');
	};

	const removeAccents = (str) => {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z ]/g, "");
	} 

	const sendObj = async () => {
		const data_send = { font_object: obj.fuente, text_color: removeAccents(obj.color), text_style: removeAccents(obj.estilo), ambit: removeAccents(obj.ambito), category: obj.categoria + 1 };
		console.log(data_send);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer token-local` },
			body: JSON.stringify(data_send),
		};

		setLoading(true);

		const data = await fetch(`${process.env.REACT_APP_API_URL}/text/create`, requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);

		setLoading(false);

		if (dataJson.status > 200) {
			setError(dataJson.message);
		} else {
			dispatch(setUIProgress(4));
			fillOptions(dataJson.colors, dataJson.fonts, dataJson.mocks);
		}
	};

	return (
		<>
			{!loading ? (
				<>
					<ModalFuente />
					<div className='row mb-3 mt-5'>
						{error !== '' && (
							<Alert variant='danger' onClose={() => setError('')} dismissible>
								<Alert.Heading style={{ textAlign: 'center' }}>{error}</Alert.Heading>
							</Alert>
						)}
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
										<option value={'seriff'}>Con adorno</option>
										<option value={'sans-seriff'}>Sin adorno</option>
										{/* <option value={'display'}>Decorativa</option>
										<option value={'handwriting'}>Caligráfica</option> */}
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
							<button type='button' className='btn btn-lg right-button-create' onClick={sendObj}>
								<div className='d-flex'>
									<p>
										GENERAR
										<br />
										OPCIONES
									</p>
									<i className='bx bxs-right-arrow mt-auto mb-auto ms-4'></i>
								</div>
							</button>
						</div>
					</div>
				</>
			) : (
				<>
					<div className='loading d-flex justify-content-center mt-5'>
						<img src='/img/loading.gif' />
					</div>
					<h3 style={{ color: '#3535e9', textAlign: 'center' }}>Generando opciones de acuerdo a tus preferencias</h3>
				</>
			)}
		</>
	);
};

export default ElegirEstilo;
