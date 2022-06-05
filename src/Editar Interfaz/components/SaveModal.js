import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SaveModal = ({ open, onClose, onSave, onShowAlert }) => {
	const [selected, setSelected] = useState(null);
	const [carpetas, setCarpetas] = useState([]);
	const [txtFolder, setTxtFolder] = useState('');
	const [txtPage, setTxtPage] = useState('');

	const userData = useSelector((state) => state.usrData) 

	useEffect(() => {
		consultarCarpetas();
	}, [open]);

	const consultarCarpetas = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({}),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/view/carpeta`, requestOptions);
		const dataJson = await data.json();

		console.log(dataJson.data);
		setCarpetas(dataJson.data);
	};

	const crearCarpeta = async () => {

		if(userData.plan === 'I' && carpetas.length >= 1){
			onShowAlert('danger', 'Solo puedes crear 1 carpeta con tu tipo de plan')
			onClose()
			return
		}

		if (txtFolder.trim() !== '') {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
				body: JSON.stringify({ nombre: txtFolder.trim() }),
			};
			const data = await fetch(`${process.env.REACT_APP_API_URL}/insert/carpeta`, requestOptions);
			const dataJson = await data.json();
            console.log(dataJson)
            setTxtFolder('')

			consultarCarpetas();
		}
	};


	const onChangeFolder = (e) => {
		setTxtFolder(e.target.value);
	};

	const onChangePage = (e) => {
		setTxtPage(e.target.value);
	};

    const onClickSave = () =>{
        onSave(txtPage, selected.id_carpeta)
        consultarCarpetas()
    }


	return (
		<Modal show={open} onHide={onClose} centered size='lg'>
			<div className='modal-save'>
				<h3 style={{ marginBottom: 30 }}>Selecciona una carpeta</h3>
				<div className='row'>
					<div className='col-6'>
						{carpetas.map((item, i) => (
							<div onClick={() => setSelected(item)} className={`row folder-save ${selected ? (item.id_carpeta === selected.id_carpeta ? 'folder-selected' : '') : ''}`} key={i}>
								<div className='col-2'>
									<i className={`bx bx-folder${selected ? (item.id_carpeta === selected.id_carpeta ? '-open' : '') : ''}`}></i>
								</div>
								<div className='col-8'>{item.titulo_carpeta}</div>
							</div>
						))}
						<div className='row d-flex align-items-center' style={{ paddingTop: 10 }}>
							<div className='col-10'>
								<input type='text' value={txtFolder} onChange={onChangeFolder} className='form-control w-100' placeholder='Agregar nueva'></input>
							</div>
							<div className='col-1'>
								<i className='bx bx-plus-circle add-folder' onClick={crearCarpeta}></i>
							</div>
						</div>
					</div>
					<div className='col-6 px-4' style={{color: '#8080ff'}}>
                        <h5>Páginas guardadas:</h5>
                        <ul>
                            {selected ? selected.trabajos.map((item, i) =>(
                                <li key={i}>
                                    {item.titulo_trabajo}
                                </li>
                            )) : null}
                        </ul>
                    </div>
                    <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-7'><input disabled={!selected} type='text' value={txtPage} onChange={onChangePage} className='form-control w-100' placeholder='Nombre de la interfaz'></input></div>
                    <div className='col-3'><Button onClick={onClickSave} variant='outline-success'>Guardar</Button></div>
                    </div>
                    
				</div>
			</div>
		</Modal>
	);
};

export default SaveModal;
