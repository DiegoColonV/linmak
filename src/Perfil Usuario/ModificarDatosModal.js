import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const ModificarDatosModal = ({ open, onClose, onShowAlert }) => {
    const [prevpsw, setPrevPsw] = useState('')
    const [psw1, setPsw1] = useState('')
    const [psw2, setPsw2] = useState('')
    const [error, setError] = useState('')

    const onSendChange = async() =>{
        if(psw1 !== psw2){
            setError('Las contraseñas no coinciden')
            return
        }
        if(psw1.trim() === '' || psw2.trim() === '' || prevpsw.trim() === ''){
            setError('Campos vacíos')
            return
        }

        const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ password: prevpsw, new_password: psw1 }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/update/user`, requestOptions);
		const dataJson = await data.json();

        console.log(dataJson)

        onClose()
        setPsw1('')
        setPsw2('')
        setPrevPsw('')
        onShowAlert()
    }

	const onSelectPlan = async(e)=>{

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ new_plan: e.target.value }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/update/plan`, requestOptions);
		const dataJson = await data.json();

        console.log(dataJson)

        onClose()
	}

	return (
		<Modal show={open} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modificar datos</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					{/* <h4>Cambiar nombre de usuario</h4>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" placeholder="Nombre de usuario" /> */}
					<h4 className='mt-2'>Cambiar contraseña</h4>
					<Form.Label className='mt-2'>Contraseña anterior</Form.Label>
					<Form.Control value={prevpsw} onChange={(e) => setPrevPsw(e.target.value)} type='password' placeholder='Contraseña' id='prev' />
					<Form.Label className='mt-3'>Nueva contraseña</Form.Label>
					<Form.Control value={psw1} onChange={(e) => setPsw1(e.target.value)} type='password' placeholder='Nueva contraseña' id='new1' />
					<Form.Label className='mt-3'>Confirmar nueva contraseña</Form.Label>
					<Form.Control value={psw2} onChange={(e) => setPsw2(e.target.value)} type='password' placeholder='Cornfirmar nueva contraseña' id='new2' />
				</Form.Group>
				{error && <p style={{ color: 'darkred' }}>{error}</p>}
				<Form.Label className='mt-4'>Tipo de plan</Form.Label>
				<Form.Select onChange={onSelectPlan}>
					<option value={'I'}>Inicial</option>
					<option value={'A'}>Avanzado</option>
					<option value={'LM'}>Linmak</option>
				</Form.Select>
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={onClose}>
					Cancelar
				</Button>
				<Button variant='success' onClick={onSendChange}>
					Aceptar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModificarDatosModal;
