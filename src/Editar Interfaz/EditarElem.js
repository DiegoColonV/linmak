import { useState } from 'react';
import { useSelector } from 'react-redux';
import EditButtons from './Elementos/EditButtons';
import EditColor from './Elementos/EditColor';
import EditFont from './Elementos/EditFont';
import EditFooter from './Elementos/EditFooter';
import EditNavbar from './Elementos/EditNavbar';
import EditTextfield from './Elementos/EditTextfield';

const EditarElem = () => {
	const [selected, setSelected] = useState('radio-colores');
	const selectedObj = useSelector((state) => state.objSelectInt.selected);

	const handleSelected = (id) => {
		setSelected(id);
	};

	return (
		<div className='edit-estr-container position-relative h-100'>
			<div className='row top-part'>
				<OptionButton text={'Colores'} id={'radio-colores'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Fuente'} id={'radio-fuente'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Botones'} id={'radio-botones'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Barra de navegación'} id={'radio-navbar'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Footer'} id={'radio-footer'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Cuadros de texto'} id={'radio-text'} selected={selected} handleSelected={handleSelected} />
			</div>
			<hr style={{color: '#5777ba'}} />
			{
				{
					'radio-colores': <EditColor selected={selectedObj.color} />,
					'radio-fuente': <EditFont selected={selectedObj.font} />,
					'radio-botones': <EditButtons />,
					'radio-navbar': <EditNavbar />,
					'radio-footer': <EditFooter />,
					'radio-text': <EditTextfield />,
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

export default EditarElem;
