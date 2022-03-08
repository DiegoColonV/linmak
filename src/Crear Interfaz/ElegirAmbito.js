import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUIProgress } from '../redux/actions/uiActions';
import { addAmbito } from '../redux/actions/txtIntActions';
import { useState } from 'react';

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
	const [textOtro, setTextOtro] = useState('');

	const handleStep = (step, path) => {
		dispatch(setUIProgress(step));
		navigate(path);
	};

	const handleAmbitSave = () => {
		handleStep(2, '/crear/estilo');
		if (selectedAmb.id !== -1) {
			if (selectedAmb.id === -2) {
				if (textOtro !== '') {
					dispatch(addAmbito(textOtro.trim()));
				}
			} else dispatch(addAmbito(selectedAmb.text));
		}
	};

	const handleInputOtro = (event) => {
		setTextOtro(event.target.value);
	};

	const handleSelectAmbit = (event) => {
		if (parseInt(event.target.value) !== -2) {
			setSelectedAmb(
				dummyAmbitos.find((obj) => obj.id === parseInt(event.target.value))
			);
			setOtroDisabled(true);
		} else {
			setSelectedAmb({ id: -2, text: 'Otro' });
			setOtroDisabled(false);
		}
	};

	return (
		<>
			<div className='row mt-5 mb-3'>
				<h1 className='section-title'>
					Elige el ámbito o enfoque
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
							Elige a qué te dedicas tú o tu empresa, qué comercializa o la
							indistria a la que pertenece.
						</div>
					</div>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-md-1 col-xs-5 d-flex justify-content-center'>
					<button
						type='button'
						className='btn btn-lg left-button-create'
						onClick={() => handleStep(0, '/crear/categoria')}
					>
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
							<div className='row'>
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
									<div
										className='card col-2 rounded shadow-sm border-0  d-flex justify-content-center'
										hidden={otroDisabled}
									>
										<div className='card-body mx-auto card-ambit'>
											{selectedAmb.icon}
										</div>
									</div>
								)}
								<small id='txtHelp' className='form-text text-muted'>
									{amb !== '' ? `Texto guardado: ${amb}` : ''}
								</small>
							</div>
							<div className='row mb-5 mt-5'>
								<div className='col-10'>
									<input
										type='text'
										className='form-control-lg border-0 shadow-sm w-100'
										placeholder='Otro...'
										disabled={otroDisabled}
										value={textOtro}
										onChange={handleInputOtro}
									></input>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-1 col-xs-5 d-flex justify-content-center'>
					<button
						type='button'
						className='btn btn-lg right-button-create'
						onClick={handleAmbitSave}
					>
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
