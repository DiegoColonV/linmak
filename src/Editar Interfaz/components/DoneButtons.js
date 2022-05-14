import { useState } from 'react';
import { Button } from 'react-bootstrap';

const DoneButtons = ({ link }) => {
	const [displayed, setDisplayed] = useState(false);

	const onExpand = () => {
		window.open(link);
	};

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
			<Button variant='success'>
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
