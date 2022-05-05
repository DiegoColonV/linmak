const ModalFuente = () => {
	return (
		<div className='modal fade bd-example-modal-lg' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel' aria-hidden='true'>
			<div className='modal-dialog modal-lg'>
				<div className='modal-content'>
					<div className='row d-flex justify-content-center mt-5'>
						<div className='col-11 mb-3'>
							<div className='row mb-3 ms-3 create-help-text-container'>
								<b>Existen 5 categorías principales de fuentes, elige la que quieras que tenga tu fuente base:</b>
							</div>
							<div className='row d-flex align-items-center'>
								<div className='col-3 create_font_container border-end'>
									<div className='row h-120px'>
										<h4>Con adorno </h4>
										Adorno al final de cada parte de la letra
									</div>
									<img className='create_img_example' src='/img/crear/fuente/cat_serif.png' />
								</div>
								<div className='col-3 create_font_container border-end'>
									<div className='row h-120px'>
										<h4>Sin adorno</h4>
										Sin elementos al final de cada parte de la letra
									</div>
									<img className='create_img_example' src='/img/crear/fuente/cat_sanserif.png' />
								</div>
								<div className='col-3 create_font_container border-end'>
									<div className='row h-120px'>
										<h4>Decorativa</h4>
										Se enfocan en la exhibición
									</div>
									<img className='create_img_example' src='/img/crear/fuente/cat_display.png' />
								</div>
								<div className='col-3 create_font_container'>
									<div className='row h-120px'>
										<h4>Caligráfica</h4>
										Simulan el trazo humano
									</div>
									<img className='create_img_example' src='/img/crear/fuente/cat_handwrite.png' />
								</div>
							</div>
							<hr />
						</div>
					</div>
					<div className='row d-flex justify-content-center'>
						<div className='col-11 mb-3'>
							<div className='row mb-3 ms-3 create-help-text-container'>
								<b>El espaciado se refiere a la separación entre cada letra en la fuente base, ejemplos:</b>
							</div>
							<div className='row d-flex align-items-center'>
								<div className='col-4 create_font_container border-end'>
									<h4>Espaciado 1</h4>
									<img className='create_img_example' src='/img/crear/fuente/espaciado_1.png' />
								</div>
								<div className='col-4 create_font_container border-end'>
									<h4>Espaciado 2</h4>
									<img className='create_img_example' src='/img/crear/fuente/espaciado_2.png' />
								</div>
								<div className='col-4 create_font_container'>
									<h4>Espaciado 3</h4>
									<img className='create_img_example' src='/img/crear/fuente/espaciado_3.png' />
								</div>
							</div>
							<hr />
						</div>
					</div>
					<div className='row d-flex justify-content-center'>
						<div className='col-11 mb-3'>
							<div className='row mb-3 ms-3 create-help-text-container'>
								<b>El tamaño se refiere al ancho y largo de cada letra en la fuente base, ejemplos:</b>
							</div>
							<div className='row d-flex align-items-center'>
								<div className='col-4 create_font_container border-end'>
									<h4>Tamaño 1</h4>
									<img className='create_img_example' src='/img/crear/fuente/size_1.png' />
								</div>
								<div className='col-4 create_font_container border-end'>
									<h4>Tamaño 2</h4>
									<img className='create_img_example' src='/img/crear/fuente/size_2.png' />
								</div>
								<div className='col-4 create_font_container'>
									<h4>Tamaño 3</h4>
									<img className='create_img_example' src='/img/crear/fuente/size_3.png' />
								</div>
							</div>
							<hr />
						</div>
					</div>
					<div className='row d-flex justify-content-center'>
						<div className='col-11 mb-3'>
							<div className='row mb-3 ms-3 create-help-text-container'>
								<b>El grosor se refiere a que tan ancho es el trazo de la letra en la fuente base, ejemplos:</b>
							</div>
							<div className='row d-flex align-items-center'>
								<div className='col-4 create_font_container border-end'>
									<h4>Grosor 1</h4>
									<img className='create_img_example' src='/img/crear/fuente/thick_1.png' />
								</div>
								<div className='col-4 create_font_container border-end'>
									<h4>Grosor 2</h4>
									<img className='create_img_example' src='/img/crear/fuente/thick_2.png' />
								</div>
								<div className='col-4 create_font_container'>
									<h4>Grosor 3</h4>
									<img className='create_img_example' src='/img/crear/fuente/thick_3.png' />
								</div>
							</div>
							<hr />
						</div>
					</div>
					<div className='row d-flex justify-content-center'>
						<div className='col-11 mb-5'>
							<div className='row mb-3 ms-3 create-help-text-container'>
								<b>La forma se refiere a que tan redonda es cada letra en la fuente base, ejemplos:</b>
							</div>
							<div className='row d-flex align-items-center'>
								<div className='col-4 create_font_container border-end'>
									<h4>Forma 1</h4>
									<img className='create_img_example' src='/img/crear/fuente/shape_1.png' />
								</div>
								<div className='col-4 create_font_container border-end'>
									<h4>Forma 2</h4>
									<img className='create_img_example' src='/img/crear/fuente/shape_2.png' />
								</div>
								<div className='col-4 create_font_container'>
									<h4>Forma 3</h4>
									<img className='create_img_example' src='/img/crear/fuente/shape_3.png' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalFuente;
