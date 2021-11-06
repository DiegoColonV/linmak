function Hero() {
    return (
        <div>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                            <div className="container">
                                <h1 className="row">¿Qué quieres crear?</h1><br />
                                <div className="row">
                                    <h2 className="col-6">Elige una categoría</h2>
                                    <div class="btn-group dropright col 6">
                                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropright
                                        </button>
                                        <div class="dropdown-menu">
                                        </div>
                                    </div>
                                    <a href="#" className="download-btn"><i className="bx bxl-play-store" /> Google Play</a>
                                    <a href="#" className="download-btn"><i className="bx bxl-apple" /> App Store</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
                            <img src="img/hero-img.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>{/* End Hero */}
        </div>
    );
}
export default Hero;