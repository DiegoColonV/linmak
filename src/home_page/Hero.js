function Hero() {
    return (
        <div>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <h1 className="row">¿Qué quieres crear?</h1>
                        <div className="row mt-5">
                            <div className="col-lg-8">
                                <div className="row">
                                    <h2 className="col-lg-3 col-sm mt-2">Elige una categoría</h2>
                                    <div className="col-lg-4 col-sm">
                                        <select className=" form-select">
                                            <option selected>Página principal</option>
                                            <option value="1">Contacto</option>
                                            <option value="2">Conócenos</option>
                                            <option value="3">Carrito</option>
                                            <option value="3">Iniciar sesión</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7">
                                        <input className="col-lg-6 col-sm-8 form-control form-control-lg" type="text" placeholder="Escribe cómo quieres que sea tu página"/>
                                    </div>
                                    <div className="col-lg-1 col-sm-2 mt-1">
                                        <box-icon name="info-circle" size="md"></box-icon>
                                    </div>
                                </div>
                                <div className="row">
                                        <button type="button" className="btn btn-outline-primary col-lg-2 mt-5 offset-5">Crear</button>
                                </div>
                            </div>
                            <div className="hero-img col-lg">
                                <img src="img/hero-img.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Hero */}
        </div>
    );
}
export default Hero;