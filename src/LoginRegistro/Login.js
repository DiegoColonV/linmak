import "./stilos.css";

function Login() {
    return (
        <div>
            <section id="formLogin" className="align-items-center">
                <div className="container">
                    <div className="row">
                        <h1 className="row">Inicia sesión</h1>
                        <div className="row mt-2">
                            <form>
                                <div className="form-group">
                                    <label for="correo">Correo Eléctronico</label>
                                    <input type="email" className="form-control" id="correo" placeholder="Email" />
                                </div>
                                <div className="form-group mt-4">
                                    <label for="contraseña">Contraseña</label>
                                    <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" />
                                </div>
                                <button type="submit" className="btn btn-outline-primary col-md-12 col-xs-18 mt-5">Ingresar</button>
                            </form>
                            <div className="form-group mt-4">
                                <p className="text-center"> o </p>
                                <button className='bx bxl-google bx-s icon-box-hp mt-3 btn btn-outline-secondary col-md-12 col-xs-18'> Ingresa con google </button>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Login;