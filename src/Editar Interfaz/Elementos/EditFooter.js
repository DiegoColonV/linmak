import { useState } from 'react';
import Autocomplete from '../components/Autocomplete';
import BottomButtons from '../components/BottomButtons';

const options = [
	{
		text: 'Con copyright',
		id: 'elem-footer-copy',
	},
	{
		text: 'Sin copyright',
		id: 'elem-footer-copy',
	},
	{
		text: 'Chico',
		id: 'elem-footer-size',
	},
	{
		text: 'Mediano',
		id: 'elem-footer-size',
	},
	{
		text: 'Grande',
		id: 'elem-footer-size',
	},
];

const EditFooter = () => {
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
			<h1 className='section-title-edit mt-5'>FOOTER</h1>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-8'>
					<Autocomplete handleAutocomplete={handleAutocomplete} arr={options} />
				</div>
			</div>
			<BottomButtons cat_change='footer' id_change={idChange} text_change={text} />
		</>
	);
};

export default EditFooter;
