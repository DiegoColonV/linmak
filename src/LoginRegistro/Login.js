import { useDispatch, useSelector } from 'react-redux';
import { userLogin, userLogout } from '../redux/actions/userActions';
import { useNavigate } from "react-router-dom";
function Login() {
    const dispatch = useDispatch();
    const obj = useSelector((state) => state.usrData);
    const navigate = useNavigate();
    const loginn = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${obj.token}`},
            body: JSON.stringify({ correo: 'jesgarv@gmail.com', password: '123456' })
        }
        const data = await fetch("http://25.59.209.228:5000/login", requestOptions)
        const dataJson = await data.json()

        console.log(dataJson)
        if (dataJson.status == 200) {
            const userData = {
                ...dataJson.ses_data,
                token: dataJson.token,
                autenticado: true
            }
            dispatch(userLogin(userData))
            localStorage.setItem('token', dataJson.token);
            navigate("/")
            console.log(obj)
        }
    }
    const prueba = () => {
        dispatch(userLogout())
        localStorage.setItem('token', "log_in_init");
        console.log(obj)
    }
    return (
        <div>
            <section id="formLogin" className="align-items-center">
                <div className="container">
                    <div className="row">
                        <h1 className="row">Inicia sesión</h1>
                        <div className="row mt-2">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="correo">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="correo" placeholder="Email" />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="contraseña">Contraseña</label>
                                    <input type="password" className="form-control" id="contrase�a" placeholder="Contraseña" />
                                </div>
                                <button type="submit" onClick={loginn} className="btn btn-outline-primary col-md-12 col-xs-18 mt-5">Ingresar</button>
                                <button type="button" onClick={prueba} className="btn btn-outline-primary col-md-12 col-xs-18 mt-5">salir</button>
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