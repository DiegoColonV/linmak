import { Modal } from 'react-bootstrap';

const InfoModal = ({ open, onClose, type }) => {
	return (
		<Modal show={open} onHide={onClose} size='lg'>
			{type === 'buttons' ? (
				<>
					<Modal.Header>
						<Modal.Title> Estilos elegibles para botones:</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<div className='row mb-3 create-help-text-container'>
							<b>Se puede elegir cualquier combinación de los siguientes estilos:</b>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-6 create_font_container border-end'>
								<h4>Rellenos</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/buttons/base.png' />
							</div>
							<div className='col-6 create_font_container border-end'>
								<h4>Contorneados</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/buttons/contorneados.png' />
							</div>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-6 create_font_container border-end'>
								<h4>Borde cuadrado</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/buttons/bcuadrado.png' />
							</div>
							<div className='col-6 create_font_container border-end'>
								<h4>Borde redondeado</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/buttons/base.png' />
							</div>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-6 create_font_container border-end'>
								<h4>Con elevación</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/buttons/celevacion.png' />
							</div>
							<div className='col-6 create_font_container border-end'>
								<h4>Sin elevación</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/buttons/base.png' />
							</div>
						</div>
						<hr />
						<div className='row d-flex mb-3 justify-content-center'>
							<div className='col-6 create_font_container'>
								<h4>Ovalados</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/buttons/ovalados.png' />
							</div>
						</div>
					</Modal.Body>
				</>
			) : type === 'navbar' ? (
				<>
					<Modal.Header>
						<Modal.Title> Estilos elegibles para barra de navegación:</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<div className='row mb-3 create-help-text-container'>
							<b>Se puede elegir cualquier combinación de los siguientes estilos:</b>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-12 create_font_container border-end'>
								<h4>Con topbar</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/navbar/small.png' style={{border: '1px solid #eaeaea'}}  />
							</div>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-12 create_font_container border-end'>
								<h4>Sin topbar</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/navbar/nocopy.png' style={{border: '1px solid #eaeaea'}} />
							</div>
						</div>
						<hr />
						<div className='row d-flex justify-content-center mb-3'>
							<div className='col-12 create_font_container'>
								<h4>Chica (60px)</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/navbar/small.png' style={{border: '1px solid #eaeaea'}}  />
							</div>
						</div>
						<hr />
						<div className='row d-flex justify-content-center mb-3'>
							<div className='col-12 create_font_container'>
								<h4>Mediana (80px)</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/navbar/madium.png' style={{border: '1px solid #eaeaea'}}  />
							</div>
						</div>
						<hr />
						<div className='row d-flex justify-content-center mb-3'>
							<div className='col-12 create_font_container'>
								<h4>Grande (100px)</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/navbar/big.png' style={{border: '1px solid #eaeaea'}} />
							</div>
						</div>
					</Modal.Body>
				</>
			) : type === 'footer' ? (
				<>
					<Modal.Header>
						<Modal.Title> Estilos elegibles para footer:</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<div className='row mb-3 create-help-text-container'>
							<b>Se puede elegir cualquier combinación de los siguientes estilos:</b>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-12 create_font_container border-end'>
								<h4>Con copyright</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/footer/copy.png' style={{border: '1px solid #eaeaea'}}  />
							</div>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-12 create_font_container border-end'>
								<h4>Sin copyright</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/footer/base.png' style={{border: '1px solid #eaeaea'}} />
							</div>
						</div>
						<hr />
						<div className='row d-flex justify-content-center mb-3'>
							<div className='col-12 create_font_container'>
								<h4>Chico</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/footer/chico.png' style={{border: '1px solid #eaeaea'}}  />
							</div>
						</div>
						<hr />
						<div className='row d-flex justify-content-center mb-3'>
							<div className='col-12 create_font_container'>
								<h4>Grande</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/footer/base.png' style={{border: '1px solid #eaeaea'}}  />
							</div>
						</div>
					</Modal.Body>
				</>
			) : (
				<>
					<Modal.Header>
						<Modal.Title> Estilos elegibles para campos de texto:</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<div className='row mb-3 create-help-text-container'>
							<b>Se puede elegir cualquier combinación de los siguientes estilos:</b>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-6 create_font_container border-end'>
								<h4>Borde cuadrado</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/textfield/bcuadrado.png' />
							</div>
							<div className='col-6 create_font_container border-end'>
								<h4>Borde redondeado</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/textfield/base.png' />
							</div>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-6 create_font_container border-end'>
								<h4>Borde con color</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/textfield/bcolor.png' />
							</div>
							<div className='col-6 create_font_container border-end'>
								<h4>Borde sin color</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/textfield/base.png' />
							</div>
						</div>
						<hr />
						<div className='row d-flex mb-3'>
							<div className='col-6 create_font_container border-end'>
								<h4>Con elevación</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/textfield/celevacion.png' />
							</div>
							<div className='col-6 create_font_container border-end'>
								<h4>Sin elevación</h4>
								<img className='create_img_example' src='/img/ejemplos/edit/textfield/base.png' />
							</div>
						</div>
					</Modal.Body>
				</>
			)}
		</Modal>
	);
};

export default InfoModal;
