import React from "react";

function Registro() {
    const regg = async (e) => {
        e.preventDefault();
        var user = document.getElementById("rusuario").value;
        var email = document.getElementById("rcorreo").value;
        var password = document.getElementById("rcontrasena").value;
        var rpassword = document.getElementById("rrepcontrasena").value;
        console.log(user)
        console.log(email)
        console.log(password)
        const token= 'log_in_init'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ nombre: user, correo: email, password: password, tipo: 'I' })
        }
        const data = await fetch("http://25.59.209.228:5000/insert/user", requestOptions)
        const dataJson = await data.json()

        console.log(dataJson)
    }
    return (
        <div>
            <section id="formLogin" className="align-items-center">
                <div className="container">
                    <div className="row">
                        <h1 className="row">Registrarse</h1>
                        <div className="row mt-2">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="correo">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="rcorreo" placeholder="Email" />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="usuario">Nombre de usuario</label>
                                    <input type="text" className="form-control" id="rusuario" placeholder="Nombre de usuario" />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="contraseña">Contraseña</label>
                                    <input type="password" className="form-control" id="rcontrasena" placeholder="Contraseña" />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="rcontraseña">Repetir contraseña</label>
                                    <input type="password" className="form-control" id="rrepcontrasena" placeholder="Repetir contraseña" />
                                </div>
                                <button type="submit" onClick={regg} className="btn btn-outline-primary col-md-12 col-xs-18 mt-5">Registrarse</button>
                            </form>
                            {/* <div className="form-group mt-4">
                                <p className="text-center"> o </p>
                                <button className='bx bxl-google bx-s icon-box-hp mt-3 btn btn-outline-secondary col-md-12 col-xs-18 ingresa-google'> Registrate con google </button>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Registro;