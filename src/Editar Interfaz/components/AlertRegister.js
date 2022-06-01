import { Button, Modal } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const AlertRegister = ({open, onClose}) =>{
    const navigate = useNavigate()

    return(
        <Modal centered show={open} onHide={onClose}>
            <Modal.Header style={{background: '#f8d7da'}}><Modal.Title style={{color: '#8c2e36'}}>No se ha iniciado sesión</Modal.Title></Modal.Header>
            <Modal.Body>
                <h5>Necesitas iniciar sesión para guardar la interfaz en una carpeta</h5>
                <h5 className="mb-5">¿No tienes una cuenta? <Link to={'/loginreg'}> Regístrate</Link></h5>
                <hr/>
                <div className="row d-flex justify-content-center mt-2">
                    <div className="col-8">
                        <Button onClick={() => navigate('/loginreg')} className="w-100" style={{background: '#1f1fff'}}>Iniciar sesión</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AlertRegister