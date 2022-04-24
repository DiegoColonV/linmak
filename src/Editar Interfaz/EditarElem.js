import { useState } from 'react';
import EditButtons from './Elementos/EditButtons';

const EditarElem = () => {
	const [selected, setSelected] = useState('radio-colores');

	const handleRadio = (event) => {
		setSelected(event.target.value);
	};

	return (
		<div className='edit-estr-container position-relative h-100'>
			<div className='row top-part' onChange={handleRadio}>
				<RadioCustom text={'Colores'} id={'radio-colores'} selected={selected} />
				<RadioCustom text={'Fuente'} id={'radio-fuente'} selected={selected} />
				<RadioCustom text={'Botones'} id={'radio-botones'} selected={selected} />
				<RadioCustom text={'Barra de navegación'} id={'radio-navbar'} selected={selected} />
				<RadioCustom text={'Footer'} id={'radio-footer'} selected={selected} />
				<RadioCustom text={'Cuadros de texto'} id={'radio-text'} selected={selected} />
			</div>
			<hr />
			{
				{
					'radio-botones': <EditButtons />,
				}[selected]
			}
		</div>
	);
};

const RadioCustom = ({ text, id, selected }) => {
	const isSelected = selected === id;
	return (
		<>
			<div className='col-6 form-check radio-container'>
				<input className='form-check-input radio' type='radio' name='radio-estructura' id={id} value={id} />
				<label className={!isSelected ? 'form-check-label ms-3 label-radio-edit' : 'form-check-label ms-3 label-radio-edit-active'} htmlFor={id}>
					{text}
				</label>
			</div>
		</>
	);
};

export default EditarElem;
