import "../App.css";
import Hero from "./Hero";

function HomePage() {
    return (
        <div>
            <Hero />
            <main id="main">
                {/* ======= Sección funcionamiento ======= */}
                <section id="funcionamiento" className="features">
                    <div className="container">
                        <div className="section-title">
                            <h2>¿Cómo funciona linmak?</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
                                <div className="content d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-md-6 icon-box" data-aos="fade-up">
                                            <i className="bx bx-category" />
                                            <h4>1. Elige tu categoría</h4>
                                            <p>Selecciona una de las 5 categoríaas diferentes para crear tu interfaz desde cero.</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                            <i className="bx bx-text" />
                                            <h4>2. Describe qué quieres crear</h4>
                                            <p>Con tus propias palabras, escribe características sobre el estilo, el color, tamaños, la fuente, etc.</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                            <i className="bx bx-layout" />
                                            <h4>3. Revisa los ejemplos</h4>
                                            <p>Elige que ejemplo mostrado se acerca más a lo que buscas</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                            <i className="bx bxs-edit" />
                                            <h4>4. Haz los cambios que desees</h4>
                                            <p>Escribe los cambios necesarios con tus propias palabras hasta que tengas el resultado que deseaas.</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                            <i className="bx bx-folder-open" />
                                            <h4>5. Guarda tu interfaz en una colección</h4>
                                            <p>Guarda tus interfaces favoritas en una colección y organíazalas</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                            <i className="bx bx-download" />
                                            <h4>6. Visualiza tu creación</h4>
                                            <p>¡Puedes ver tu interfaz creada en pantalla completa o incluso descargar el código html y css!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                                <img src="img/homepage/gifejemplo.gif" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>{/* Fin sección funcionamiento*/}
                {/* =======Sección editar  ======= */}
                <section id="editar" className="features editar">
                    <div className="container">
                        <div className="section-title">
                            <h2>Modifica con tus palabras</h2>
                            <p>Cada que crees una interfaz, puedes modificarla sólamente escribiendo los cambios que deseas.</p>
                        </div>
                        <div className="row ">
                            <div className="image col-md-2 d-flex align-items-stretch justify-content-center offset-1" data-aos="fade-right" data-aos-delay={25}>
                                <img src="img/homepage/int.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-2 mt-5 d-flex align-items-stretch justify-content-center" data-aos="fade-right" data-aos-delay={25}>
                                <i className="bx bx-right-arrow icon-box-hp align-middle"/>
                            </div>
                            <div className="image col-md-2 d-flex align-items-stretch justify-content-center" data-aos="fade-right" data-aos-delay={25}>
                                <img src="img/homepage/int.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-2 mt-5 d-flex align-items-stretch justify-content-center" data-aos="fade-right" data-aos-delay={25}>
                                <i className="bx bx-right-arrow icon-box-hp align-middle"/>
                            </div>
                            <div className="image col-md-2 d-flex align-items-stretch justify-content-center" data-aos="fade-right" data-aos-delay={25}>
                                <img src="img/homepage/int.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-2 d-flex align-items-stretch justify-content-center offset-1" data-aos="fade-right" data-aos-delay={25}>
                                <input className="form-control" type="text" placeholder="Minimalista" readOnly/>
                            </div>
                            <div className="col-md-2 d-flex align-items-stretch justify-content-center offset-2" data-aos="fade-right" data-aos-delay={25}>
                                <input className="form-control" type="text" placeholder="Colores azules" readOnly/>
                            </div>
                            <div className=" col-md-2 d-flex align-items-stretch justify-content-center offset-2" data-aos="fade-right" data-aos-delay={25}>
                                <input className="form-control" type="text" placeholder="Letra más grande" readOnly/>   
                            </div>
                        </div>
                    </div>
                </section>{/* Fin sección editar/}
                {/* ======= Sección precios ======= */}
                <section id="pricing" className="pricing">
                    <div className="container">
                        <div className="section-title">
                            <h2>Precios</h2>
                            <p>Mejora tu cuenta para acceder a increíbles funciones</p>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-4 box" data-aos="fade-right">
                                <h3>Free</h3>
                                <h4>$0<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                                    <li className="na"><i className="bx bx-x" /> <span>Pharetra massa massa ultricies</span></li>
                                    <li className="na"><i className="bx bx-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                            <div className="col-lg-4 box featured" data-aos="fade-up">
                                <h3>Business</h3>
                                <h4>$29<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                                    <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
                                    <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                            <div className="col-lg-4 box" data-aos="fade-left">
                                <h3>Developer</h3>
                                <h4>$49<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                                    <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
                                    <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                </section>{/* End Pricing Section */}
            </main>{/* End #main */}
            { }
        </div>
    );
}

export default HomePage;