import { useState } from 'react';
import Autocomplete from '../components/Autocomplete';
import BottomButtons from '../components/BottomButtons';

const options = [
	{
		text: 'Rellenos',
		id: 'elem-buttons-fill',
	},
	{
		text: 'Contorneados',
		id: 'elem-buttons-fill',
	},
	{
		text: 'Ovalados',
		id: 'elem-buttons-oval',
	},
	{
		text: 'Borde cuadrado',
		id: 'elem-buttons-border',
	},
	{
		text: 'Borde redondeado',
		id: 'elem-buttons-border',
	},
	{
		text: 'Con elevación',
		id: 'elem-buttons-elevation',
	},
	{
		text: 'Sin elevación',
		id: 'elem-buttons-elevation',
	},
];

const EditButtons = () => {
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
			<h1 className='section-title-edit mt-5'>BOTONES</h1>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-6'>
					<Autocomplete handleAutocomplete={handleAutocomplete} arr={options} />
				</div>
			</div>
			<BottomButtons cat_change='buttons' id_change={idChange} text_change={text} />
		</>
	);
};

export default EditButtons;
