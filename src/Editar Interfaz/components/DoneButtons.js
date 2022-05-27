import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SaveModal from './SaveModal';

const DoneButtons = ({ link, onShowModal, objEdit, objSelected, objCreateInt }) => {

	const [modalSave, setModalSave] = useState(false)

	const onShowModalSave = () =>{
		setModalSave(true)
	}

	const onCloseModalSave = () =>{
		setModalSave(false)
	}

	const onExpand = () => {
		window.open(link);
	};

	const setFile = () => {
		switch (objCreateInt.categoria) {
			case 0:
				return 'index';

			case 1:
				return 'contact';

			case 2:
				return 'about';

			case 3:
				return 'cart';

			case 4:
				return 'login';

			default:
				break;
		}
	};

	const onSave = async(name, id_folder) =>{
		const token_local = localStorage.getItem('token');
		if(!token_local || token_local === 'token-local' || token_local === 'log_in_init' || token_local === ''){
			onShowModal()
		}
		else{
			const data2send = {
				id_mock: objSelected.selected.int[0],
				id_font: objSelected.selected.font[0],
				id_color: objSelected.selected.color[0],
				name: name,
				pagetype: setFile(),
				folder: objEdit.folder,
				id_folder: id_folder,
				mock: objSelected.selected.int[1].toLowerCase(),
			}
			console.log(data2send)

			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`, 'Access-Control-Allow-Origin': '*' },
				body: JSON.stringify(data2send),
			};

			const data = await fetch('http://25.59.209.228:5000/save/newWork', requestOptions);
			const dataJson = await data.json();
			console.log(dataJson);
		}
	}

	return (
		<>
		<SaveModal open={modalSave} onClose={onCloseModalSave} onSave={onSave}/>
		<div className='done-buttons-container'>
			<Button variant='success'>
				<i className='bx bx-check'></i>
			</Button>
			<br/>
			<Button variant='success' onClick={onExpand}>
				<i className='bx bx-expand'></i>
			</Button>
			<br/>
			<Button variant='success' onClick={onShowModalSave}>
				<i className='bx bxs-save'></i>
			</Button>
			<br/>
			<Button variant='success'>
				<i className='bx bxs-download'></i>
			</Button>			
		</div>
		</>
	);
};

export default DoneButtons;
