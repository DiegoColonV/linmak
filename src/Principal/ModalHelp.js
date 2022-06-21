import { useState } from "react";
import { Button, Modal } from "react-bootstrap"

const ModalHelp = ({open, onClose}) =>{

    const [url, setUrl] = useState('https://www.youtube.com/embed/_SuWVVKn7_s')

    return (
			<Modal show={open} onHide={onClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>¿Cómo usar linmak?</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<iframe
						width='100%'
						height={500}
						src={url}
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen
                        key={url}
					></iframe>
				</Modal.Body>

				<Modal.Footer>
					<Button className='btn-tutorial' onClick={() => setUrl('https://www.youtube.com/embed/_SuWVVKn7_s')}>Crear</Button>
					<Button className='btn-tutorial' onClick={() => setUrl('https://www.youtube.com/embed/Y_nG5QFG8gY')}>Editar</Button>
					<Button className='btn-tutorial' onClick={() => setUrl('https://www.youtube.com/embed/BFNI81SWN5o')}>Gestionar</Button>
				</Modal.Footer>
			</Modal>
		);
}

export default ModalHelp