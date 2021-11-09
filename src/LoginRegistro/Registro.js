import React from "react";
import "./stilos.css";

function Registro() {
    return (
        <div>
            <section id="formLogin" className="align-items-center">
                <div className="container">
                    <div className="row">
                        <h1 className="row">Registrarse</h1>
                        <div className="row mt-2">
                            <form>
                                <div className="form-group">
                                    <label for="correo">Correo El�ctronico</label>
                                    <input type="email" className="form-control" id="correo" placeholder="Email" />
                                </div>
                                <div className="form-group mt-4">
                                    <label for="usuario">Nombre de usuario</label>
                                    <input type="text" className="form-control" id="usuario" placeholder="Nombre de usuario" />
                                </div>
                                <div className="form-group mt-4">
                                    <label for="contrase�a">Contrase�a</label>
                                    <input type="password" className="form-control" id="contrase�a" placeholder="Contrase�a" />
                                </div>
                                <div className="form-group mt-4">
                                    <label for="rcontrase�a">Repetir contrase�a</label>
                                    <input type="password" className="form-control" id="rcontrase�a" placeholder="Repetir contrase�a" />
                                </div>
                                <button type="submit" className="btn btn-outline-primary col-md-12 col-xs-18 mt-5">Registrarse</button>
                            </form>
                            <div className="form-group mt-4">
                                <p className="text-center"> o </p>
                                <button className='bx bxl-google bx-s icon-box-hp mt-3 btn btn-outline-secondary col-md-12 col-xs-18'> Registrate con google </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Registro;