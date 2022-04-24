import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ChangesModal = ({ open, handleCloseModal, list, handleDeleteChange }) => {
	const componentsArr = () => {
		let components = [];
		for (const key in list) {
			if (list[key].length > 0) components.push(<Change key={key} cat={key} arr={list[key]} handleDeleteChange={handleDeleteChange} />);
		}
		return components;
	};

	return (
		<Modal centered show={open} onHide={handleCloseModal} scrollable>
			<Modal.Header closeButton>
				<Modal.Title>Cambios</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ padding: 30 }}>{componentsArr().map((item) => item)}</Modal.Body>
		</Modal>
	);
};

const Change = ({ cat, arr, handleDeleteChange }) => {
	const _cat = () => {
		switch (cat) {
			case 'category':
				return 'Categoría';
			case 'ambit':
				return 'Ámbito';
			case 'style':
				return 'Estilo';
			case 'color':
				return 'Color';
			case 'font':
				return 'Fuente';
			case 'buttons':
				return 'Botones';
			case 'navbar':
				return 'Barra de navegación';
			case 'footer':
				return 'Footer';
			case 'textfield':
				return 'Cuadros de texto';
			default:
				break;
		}
	};

	return (
		<>
			<h3>{_cat()}</h3>
			{arr.map((item) => (
				<div key={item.id_change} className=' row unit-change-container'>
					<div className='col-10'>
						<i className='bx bx-right-arrow me-2'></i>
						{item.text}
					</div>
					<div className='col-2'>
						<i className='bx bx-trash' onClick={() => handleDeleteChange(cat, item.id_change)}></i>
					</div>
				</div>
			))}
			<hr />
		</>
	);
};

export default ChangesModal;
