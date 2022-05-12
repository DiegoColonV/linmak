import { useState } from 'react';
import Autocomplete from '../components/Autocomplete';
import BottomButtons from '../components/BottomButtons';

const options = [
	{
		text: 'Borde cuadrado',
		id: 'elem-textfield-rounded',
	},
	{
		text: 'Borde redondeado',
		id: 'elem-textfield-rounded',
	},
	{
		text: 'Con elevación',
		id: 'elem-textfield-elevation',
	},
	{
		text: 'Sin elevación',
		id: 'elem-textfield-elevation',
	},
	{
		text: 'Con bordes de color',
		id: 'elem-textfield-border',
	},
	{
		text: 'Sin bordes de color',
		id: 'elem-textfield-borders',
	},
];

const EditTextfield = () => {
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
			<h1 className='section-title-edit mt-5'>CUADROS DE TEXTO</h1>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-6'>
					<Autocomplete handleAutocomplete={handleAutocomplete} arr={options} />
				</div>
			</div>
			<BottomButtons cat_change='textfield' id_change={idChange} text_change={text} />
		</>
	);
};

export default EditTextfield;
