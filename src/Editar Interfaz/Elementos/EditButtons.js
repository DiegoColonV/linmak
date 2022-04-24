import { useState } from 'react';
import Autocomplete from '../components/Autocomplete';
import BottomButtons from '../components/BottomButtons';

const buttonsOptions = [
	{
		text: 'Rellenos',
		id: 'elem-buttons-filled',
	},
	{
		text: 'Contorneados',
		id: 'elem-buttons-outlined',
	},
	{
		text: 'Ovalados',
		id: 'elem-buttons-oval',
	},
	{
		text: 'Borde cuadrado',
		id: 'elem-buttons-border-square',
	},
	{
		text: 'Borde redondeado',
		id: 'elem-buttons-border-rounded',
	},
	{
		text: 'Con elevación',
		id: 'elem-buttons-elevation-yes',
	},
	{
		text: 'Sin elevación',
		id: 'elem-buttons-elevation-no',
	},
];

const EditButtons = () => {
	const [text, setText] = useState('');

	const handleInput = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<h1 className='section-title-edit mt-5'>BOTONES</h1>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-8'>
					<Autocomplete />
				</div>
			</div>
			<BottomButtons cat_change='buttons' id_change='elem_buttons' text_change={text.trim()} />
		</>
	);
};

export default EditButtons;
