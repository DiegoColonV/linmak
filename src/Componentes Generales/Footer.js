function Footer (){
    return(
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>linmak</h3>
                            <p>
                                Unidad Profesional Adolfo López Mateos <br />
                                Ciudad de México<br />
                                México<br /><br />
                                <strong>Teléfono:</strong> 55 555555<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links offset-lg-3">
                            <h4>Explorar</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Crear interfaz</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Conócenos</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Perfíl</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Iniciar sesión</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Registrarse</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Nuestras redes</h4>
                            <p>Siguenos en nuestras redes para estar al tanto de todas las novedades de la página</p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="copyright">
                    © Copyright <strong><span>linmak</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-app-landing-page-template/ */}
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;