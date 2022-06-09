import { Modal, Form, Button } from "react-bootstrap"

const ModificarDatosModal = ({open, onClose, onSave, data}) =>{
    return(
        <Modal show={open} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modificar datos</Modal.Title>
			</Modal.Header>

			<Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h4>Cambiar nombre de usuario</h4>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" placeholder="Nombre de usuario" />
                <h4 className="mt-5">Cambiar contraseña</h4>
                <Form.Label className="mt-2">Contraseña anterior</Form.Label>
                <Form.Control  type="password" placeholder="Contraseña" />
                <Form.Label className="mt-3">Nueva contraseña</Form.Label>
                <Form.Control type="password" placeholder="Nueva contraseña" />
            </Form.Group>
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={onClose}>Cancelar</Button>
				<Button variant='success' onClick={onSave}>Aceptar</Button>
			</Modal.Footer>
		</Modal>
    )
}

export default ModificarDatosModal