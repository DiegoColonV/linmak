import { useState } from 'react';
import EditCat from './Estructura/EditCat';

const EditarEstr = () => {
	const [selected, setSelected] = useState('radio-categoria');

	const handleRadio = (event) => {
		setSelected(event.target.value);
	};

	return (
		<div className='edit-estr-container position-relative h-100'>
			<div className='row top-part' onChange={handleRadio}>
				<RadioCustom text={'Categoría'} id={'radio-categoria'} selected={selected} />
				<RadioCustom text={'Ámbito'} id={'radio-ambito'} selected={selected} />
				<RadioCustom text={'Estilo'} id={'radio-estilo'} selected={selected} />
			</div>
			<hr />
			{
				{
					'radio-categoria': <EditCat />,
					'radio-ambito': <h1>ambito</h1>,
					'radio-estilo': <h1>estilo</h1>,
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

export default EditarEstr;
