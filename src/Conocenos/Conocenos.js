import "./estilos.css";

function Conocenos() {
    return (
        <div>
            <main id="main">
                {/* ======= Breadcrumbs Section ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Inner Page</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Inner Page</li>
                            </ol>
                        </div>
                    </div>
                </section>{/* End Breadcrumbs Section */}
                <section className="topimg">
                    <div>
                        <div className="section-images">
                            <div id="cImagen" className="img-fluid img-thumbnail" alt="Responsive image">
                                <img src="img/img-compu1.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="queEs">
                    <div className="container">
                        <h1 className="title text-center"> ¿Qué es Linmak? </h1>
                        <p className="mt-5 text">
                            El nombre de Linmak es un juego de palabras, viene de Language Interface Maker. El proyecto de Linmak nace con la idea de
                            facilitar la creación de interfaces web, y creemos que no hay forma más fácil de crear una interfaz que describirla con tus
                            propias palabras. <br/> <br/>
                            Con ayuda del Procesamiento de Lenguaje Natural somos capaces de crear una interfaz a partir de una frase, y de seguirla modificando
                            con palabras. También nos aseguramos que todas las interfaces creadas cumplan con los requirimientos de Usabilidad y UX/UI, porque como programadores
                            y usuarios conocemos la importancia de estos y la diferencia que marcan en las páginas web. <br /> <br />
                            Queremos enfocar este proyecto para que sea una herramienta de utilidad entre desarrolladores web y potenciales clientes. 

                        </p>
                        <div className="row text-center ">
                            <div className="col-md-3 offset-md-1 mt-5">
                                <span className="">
                                    <i className="bx bx-text"></i>
                                </span>
                                <h5 className="my-3">Escribe</h5>
                            </div>
                            <div className="col-md-3 offset-md-1 mt-5">
                                <span className="">
                                    <i className="bx bx-layout"></i>
                                </span>
                                <h5 className="my-3">Crea</h5>
                            </div>
                            <div className="col-md-3 offset-md-1 mt-5">
                                <span className="">
                                    <i className="bx bxs-edit"></i>
                                </span>
                                <h5 className="my-3">Edita</h5>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container mt-4">
                        <div className="text-center">
                            <h1 className=" title section-heading ">Estadisticas</h1>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-link" >
                                        <div className=" portfolio-link portfolio-hover">
                                            <div className="portfolio-hover-content"><p className="nums">200</p></div>
                                        </div>
                                        <img className="img-fluid" src="img/1.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading">Páginas creadas</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-link" >
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content"><p className="nums">100</p></div>
                                        </div>
                                        <img className="img-fluid" src="img/3.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading">Usuarios</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-link" >
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content"><p className="nums">3000</p></div>
                                        </div>
                                        <img className="img-fluid" src="img/2.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading">Lineas de código</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-link" >
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content"><p className="nums">+600</p></div>
                                        </div>
                                        <img className="img-fluid" src="img/4.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading">Elementos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="nosotros">
                        <div className="container mt-4">
                            <div className="text-center">
                            <h1 className="title text-center">Nosotros</h1>
                                <h7 className="section-subheading text-muted">El equipo de desarrollo.</h7>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-4">
                                    <div className=" row team-member">
                                        <img className="mx-auto rounded-circle" src="img/user.png" alt="..." />
                                            <h4>Diego Colón</h4>
                                        <p className="text-muted">Lead Designer</p>
                                        </div>
                                    </div>
                                <div className="col-lg-4">
                                    <div className=" row team-member">
                                    <img className="mx-auto rounded-circle" src="img/user.png" alt="..." />
                                            <h4>Jesús García</h4>
                                        <p className="text-muted">Lead Marketer</p>
                                        </div>
                                    </div>
                                <div className="col-lg-4">
                                    <div className="row team-member">
                                        <img className="mx-auto rounded-circle" src="img/user.png" alt="..." />
                                            <h4>Yaxiri Vázquez</h4>
                                        <p className="text-muted">Lead Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </main>{/* End #main */}
        </div>
    );
}

export default Conocenos;