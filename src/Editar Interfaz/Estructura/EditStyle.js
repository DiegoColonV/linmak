import { useState } from 'react';
import BottomButtons from '../components/BottomButtons';

const EditStyle = () => {
	const [text, setText] = useState('');

	const handleInput = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<h1 className='section-title-edit mt-5'>ESTILO</h1>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-6' style={{marginTop: 58}}>
					<input type='text' className='form-control form-control-lg' value={text} placeholder='Escribe el estilo que quieres que tenga tu página' onChange={handleInput}></input>
				</div>
			</div>
			<BottomButtons cat_change='style' id_change='estr_stylet' text_change={text.trim()} />
		</>
	);
};

export default EditStyle;
