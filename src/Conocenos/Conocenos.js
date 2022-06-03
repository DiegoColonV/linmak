import './estilos.css';

function Conocenos() {
	return (
		<div>
			<main id='main'>
				<section className='topimg'>
					<div className='parallax' >
						<div className='text-parallax'><img src="/img/logo.png" alt="" className="img-fluid" style={{width: 500}}/> </div>
					</div>
				</section>
				<section className='queEs'  data-aos='fade-up' data-aos-delay={300}>
					<h1> ¿Qué es Linmak? </h1>
					<p className='mt-5 text'>
						El nombre de Linmak es un juego de palabras, viene de Language Interface Maker. El proyecto de Linmak nace con la idea de facilitar la creación de interfaces web, y
						creemos que no hay forma más fácil de crear una interfaz que describirla con tus propias palabras. <br />
						Con ayuda del Procesamiento de Lenguaje Natural somos capaces de crear una interfaz a partir de una frase, y de seguirla modificando con palabras. También nos
						aseguramos que todas las interfaces creadas cumplan con los requirimientos de Usabilidad y UX/UI, porque como programadores y usuarios conocemos la importancia de estos
						y la diferencia que marcan en las páginas web. <br />
						Queremos enfocar este proyecto para que sea una herramienta de utilidad entre desarrolladores web y potenciales clientes.
					</p>
					<div className='row text-center d-flex justify-content-center ' style={{padding: '150px 0px'}} >
						<div className='col-md-3 mt-5' data-aos='fade-left' data-aos-delay={300}>
							<span className=''>
								<img src='/img/conocenos/write.gif' className='icon-gif-about'></img>
							</span>
							<h4 className='my-3'>Escribe</h4>
						</div>
						<div className='col-md-3 mt-5' data-aos='fade-up' data-aos-delay={300}>
							<span className=''>
								<img src='/img/conocenos/create.gif' className='icon-gif-about'></img>
							</span>
							<h4 className='my-3'>Crea</h4>
						</div>
						<div className='col-md-3 mt-5' data-aos='fade-right' data-aos-delay={300}>
							<span className=''>
								<img src='/img/conocenos/edit.gif' className='icon-gif-about'></img>
							</span>
							<h4 className='my-3'>Edita</h4>
						</div>
					</div>
				</section>
				<section className='page-section bg-light' id='portfolio' >
					<div className='container mt-4'>
						<div className='text-center'>
							<h1 className=' title section-heading '>Estadisticas</h1>
						</div>
						<div className='row mt-5'>
							<div className='col-md-3 col-sm-6 mb-4'>
								<div className='portfolio-item'>
									<div className='portfolio-link'>
										<div className=' portfolio-link portfolio-hover'>
											<div className='portfolio-hover-content'>
												<p className='nums'>200</p>
											</div>
										</div>
										<img className='img-fluid' src='img/conocenos/1.jpg' alt='...' />
									</div>
									<div className='portfolio-caption'>
										<div className='portfolio-caption-heading'>Páginas creadas</div>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-sm-6 mb-4'>
								<div className='portfolio-item'>
									<div className='portfolio-link'>
										<div className='portfolio-hover'>
											<div className='portfolio-hover-content'>
												<p className='nums'>100</p>
											</div>
										</div>
										<img className='img-fluid' src='img/conocenos/3.jpg' alt='...' />
									</div>
									<div className='portfolio-caption'>
										<div className='portfolio-caption-heading'>Usuarios</div>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-sm-6 mb-4'>
								<div className='portfolio-item'>
									<div className='portfolio-link'>
										<div className='portfolio-hover'>
											<div className='portfolio-hover-content'>
												<p className='nums'>3000</p>
											</div>
										</div>
										<img className='img-fluid' src='img/conocenos/2.jpg' alt='...' />
									</div>
									<div className='portfolio-caption'>
										<div className='portfolio-caption-heading'>Lineas de código</div>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-sm-6 mb-4'>
								<div className='portfolio-item'>
									<div className='portfolio-link'>
										<div className='portfolio-hover'>
											<div className='portfolio-hover-content'>
												<p className='nums'>+600</p>
											</div>
										</div>
										<img className='img-fluid' src='img/conocenos/4.jpg' alt='...' />
									</div>
									<div className='portfolio-caption'>
										<div className='portfolio-caption-heading'>Elementos</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='nosotros' data-aos='fade-up' data-aos-delay={300}>
					<div className='container mt-4'>
						<div className='text-center'>
							<h1 className='title text-center'>Nosotros</h1>
							<h6 className='section-subheading text-muted'>El equipo de desarrollo.</h6>
						</div>
						<div className='row d-flex justify-content-center mt-5'>
							<div className='col-lg-4 text-center'>
								<img className='img-team my-4' src='img/conocenos/team/diego.png' alt='...' />
								<h4>Diego Colón</h4>
								<p className='text-muted'>Lead Designer</p>
							</div>
							<div className='col-lg-4 text-center'>
								<img className='img-team my-4' src='img/conocenos/team/jesus.jpg' alt='...' />
								<h4>Jesús García</h4>
								<p className='text-muted'>Lead Marketer</p>
							</div>
							<div className='col-lg-4 text-center'>
								<img className='img-team my-4' src='img/conocenos/team/yaxiri.jpg' alt='...' />
								<h4>Yaxiri Vázquez</h4>
								<p className='text-muted'>Lead Developer</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			{/* End #main */}
		</div>
	);
}

export default Conocenos;
