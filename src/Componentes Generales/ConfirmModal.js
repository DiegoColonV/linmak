import { Button, Modal } from 'react-bootstrap';

const ConfirmModal = ({ open, onClose, title, body, onSave }) => {
	return (
		<Modal show={open} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				{body}
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={onClose}>Cancelar</Button>
				<Button variant='danger' onClick={onSave}>Aceptar</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ConfirmModal;
