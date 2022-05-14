import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BottomButtons from '../components/BottomButtons';

const EditFont = ({ selected, onReload}) => {
	console.log(selected)

	const initialObj = {
		category: selected[2],
		space: selected[3],
		size: selected[4],
		thickness: selected[5],
		shape: selected[6],
	};

	const [objFont, setObjFont] = useState(initialObj);


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
			<h1 className='section-title-edit mt-5'>FUENTE</h1>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-11'>
					<div className='row d-flex justify-content-center mb-5'>
						<div className='col-6'>
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
								<option value={'display'}>Decorativa</option>
								<option value={'handwriting'}>Caligráfica</option>
							</select>
						</div>
					</div>
					<div className='row d-flex justify-content-center'>
						<div className='col-md-5 px-5 col-xs-12'>
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
						<div className='col-md-5 px-5 col-xs-12'>
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

						<div className='col-md-5 px-5 col-xs-12'>
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
						<div className='col-md-5 px-5 col-xs-12'>
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
			</div>
			<BottomButtons cat_change='font' id_change='elem-font' text_change={JSON.stringify(objFont)} onReload={onReload}  />
		</>
	);
};

export default EditFont;
