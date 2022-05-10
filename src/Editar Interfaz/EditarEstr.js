import { useState } from 'react';
import { useSelector } from 'react-redux';
import EditAmbit from './Estructura/EditAmbit';
import EditCat from './Estructura/EditCat';
import EditStyle from './Estructura/EditStyle';

const EditarEstr = () => {
	const [selected, setSelected] = useState('radio-categoria');


	const handleSelected = (id) => {
		setSelected(id);
	};

	return (
		<div className='edit-estr-container position-relative h-100'>
			<div className='row top-part'>
				<OptionButton text={'Categoría'} id={'radio-categoria'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Ámbito'} id={'radio-ambito'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Estilo'} id={'radio-estilo'} selected={selected} handleSelected={handleSelected} />
			</div>
			<hr style={{color: '#5777ba'}} />
			{
				{
					'radio-categoria': <EditCat />,
					'radio-ambito': <EditAmbit />,
					'radio-estilo': <EditStyle />,
				}[selected]
			}
		</div>
	);
};

const OptionButton = ({ text, id, selected, handleSelected }) => {
	const isSelected = selected === id;
	return (
		<>
			<div className={`col-6`}>
				<div className={`select-option-container ${isSelected && 'soc-selected'}`} onClick={() => handleSelected(id)}>{text}</div>
			</div>
		</>
	);
};

export default EditarEstr;
