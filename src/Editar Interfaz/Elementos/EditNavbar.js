import { useState } from 'react';
import Autocomplete from '../components/Autocomplete';
import BottomButtons from '../components/BottomButtons';

const options = [
	{
		text: 'Con topbar',
		id: 'elem-navbar-topbar',
	},
	{
		text: 'Sin topbar',
		id: 'elem-navbar-topbar',
	},
	{
		text: 'Chica',
		id: 'elem-navbar-size',
	},
	{
		text: 'Mediana',
		id: 'elem-navbar-size',
	},
	{
		text: 'Grande',
		id: 'elem-navbar-size',
	},
	{
		text: 'Contenido a la izquierda',
		id: 'elem-navbar-content',
	},
	{
		text: 'Contenido a la derecha',
		id: 'elem-navbar-content',
	},
	{
		text: 'Fija',
		id: 'elem-navbar-position',
	},
	{
		text: 'Estática',
		id: 'elem-navbar-position',
	},
];

const EditNavbar = () => {
	const [text, setText] = useState('');
	const [idChange, setIdChange] = useState('');

	const handleAutocomplete = (obj) => {
		if (obj !== null) {
			setText(obj.text);
			setIdChange(obj.id);
		} else setText('');
	};

	return (
		<>
			<h1 className='section-title-edit mt-5'>BARRA DE NAVEGACIÓN</h1>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-8'>
					<Autocomplete handleAutocomplete={handleAutocomplete} arr={options} />
				</div>
			</div>
			<BottomButtons cat_change='navbar' id_change={idChange} text_change={text} />
		</>
	);
};

export default EditNavbar;
