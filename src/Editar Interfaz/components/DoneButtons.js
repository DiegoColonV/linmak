import { useState } from 'react';
import { Button } from 'react-bootstrap';

const DoneButtons = ({ link, onShowModal }) => {

	const onExpand = () => {
		window.open(link);
	};

	const onSave = () =>{
		const token_local = localStorage.getItem('token');
		if(!token_local || token_local === 'token-local' || token_local === 'log_in_init' || token_local === ''){
			onShowModal()
		}
		else{
			console.log(token_local)
		}
	}

	return (
		<div className='done-buttons-container'>
			<Button variant='success'>
				<i className='bx bx-check'></i>
			</Button>
			<br/>
			<Button variant='success' onClick={onExpand}>
				<i className='bx bx-expand'></i>
			</Button>
			<br/>
			<Button variant='success' onClick={onSave}>
				<i className='bx bxs-save'></i>
			</Button>
			<br/>
			<Button variant='success'>
				<i className='bx bxs-download'></i>
			</Button>			
		</div>
	);
};

export default DoneButtons;
