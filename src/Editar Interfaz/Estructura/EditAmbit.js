import { useState } from 'react';
import BottomButtons from '../components/BottomButtons';

const EditAmbit = () => {
	const [text, setText] = useState('');

	const handleInput = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<h1 className='section-title-edit mt-5'>ÁMBITO</h1>

			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-8'>
					<input type='text' className='form-control form-control-lg' value={text} placeholder='Escribe a qué te dedicas tú o tu empresa' onChange={handleInput}></input>
				</div>
			</div>
			<BottomButtons cat_change='ambit' id_change='estr_ambit' text_change={text.trim()} />
		</>
	);
};

export default EditAmbit;
