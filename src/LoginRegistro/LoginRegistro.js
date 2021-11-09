import "../App.css";
import Login from './Login';
import Registro from './Registro';

function LoginRegistro() {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-6">
                    <Login />
                </div>
                <div className="col-md-6">
                    <Registro />
                </div>
            </div>
        </div>        
    );
}

export default LoginRegistro;