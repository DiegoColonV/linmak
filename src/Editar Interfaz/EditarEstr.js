import { useState } from 'react';
import { useSelector } from 'react-redux';
import EditAmbit from './Estructura/EditAmbit';
import EditCat from './Estructura/EditCat';
import EditStyle from './Estructura/EditStyle';

const EditarEstr = ({onReload}) => {
	const [selected, setSelected] = useState('categoria');


	const handleSelected = (id) => {
		setSelected(id);
	};

	return (
		<div className='edit-estr-container position-relative h-100'>
			<div className='row top-part'>
				<OptionButton text={'Categoría'} id={'categoria'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Ámbito'} id={'ambito'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Estilo'} id={'estilo'} selected={selected} handleSelected={handleSelected} />
			</div>
			<hr style={{color: '#5777ba'}} />
			{
				{
					'categoria': <EditCat onReload={onReload} />,
					'ambito': <EditAmbit onReload={onReload} />,
					'estilo': <EditStyle onReload={onReload} />,
				}[selected]
			}
		</div>
	);
};

const OptionButton = ({ text, id, selected, handleSelected }) => {
	const isSelected = selected === id;
	let icon = null;
	switch (id) {
		case 'categoria':
			icon = <i className='bx bx-category' ></i>
			break;
		case 'ambito':
			icon = <i className='bx bx-briefcase-alt-2' ></i>;
			break;
		case 'estilo':
			icon = <i className='bx bx-paint-roll' ></i>
			break;
	}

	return (
		<>
			<div className={`col-6`}>
				<div className={`select-option-container ${isSelected && 'soc-selected'}`} onClick={() => handleSelected(id)}>{icon}{text}</div>
			</div>
		</>
	);
};

export default EditarEstr;
