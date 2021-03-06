import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLink } from '../redux/actions/editIntActions';
import { selectColor, selectFont } from '../redux/actions/selectedIntActions';
import { setEditSaved, setIdFolder, setIdWork } from '../redux/actions/uiActions';
import FilaProyecto from './FilaProyecto';
import PreviewPag from './PreviewPag';

/*
    Clase que muestra los proyectos en las carpetas almacenadas por el usuario
    return: Contenedor con una tabla y una sección de previsualización
    props: none
    state:
        * selected : nombre de la carpeta seleccionada
        * contActive: (true|false) si el contenedor debe estar o no activo
        * paginas : Arreglo que contiene las paginas correspondientes al proyecto seleccionado
*/

const Carpetas = () => {
	const [idSelected, setIdSelected] = useState(null);
	const [pages, setPages] = useState([]);
	const [nombre, setNombre] = useState(' ');
	const [showError, setShowError] = useState(false);
	const [errorText, setErrorText] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);
	const [successText, setSuccessText] = useState('');
	const [carpetas, setCarpetas] = useState([]);

	const userData = useSelector((state) => state.usrData)

	const navigate = useNavigate();

	useEffect(() => {
		consultarCarpetas();
	}, []);

	const consultarCarpetas = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({}),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/view/carpeta`, requestOptions);
		const dataJson = await data.json();

		console.log(dataJson.data);
		setPages([])
		setCarpetas(dataJson.data);
		if(idSelected) onSelect(idSelected)
	};

	const handleNombre = (e) => {
		setNombre(e.target.value);
	};

	const limpiar = () => {
		setNombre('');
	};

	const crearCarpeta = async (e) => {

		if(userData.plan === 'I' && carpetas.length >= 1){
			setErrorText('Solo puedes crear 1 carpeta con tu plan actual')
			setShowError(true)
			return
		}

		setShowError(false);
		setShowSuccess(false);
		e.preventDefault();
		/*if (nombre === ' ') {*/
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ nombre: nombre }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/insert/carpeta`, requestOptions);
		const dataJson = await data.json();

		if (dataJson.status === 200) {
			setSuccessText('Carpeta creada con éxito');
			setShowSuccess(true);
			limpiar();
			console.log(dataJson);
		} else if (dataJson.status === 201) {
			setErrorText('Ya existe una carpeta con ese nombre');
			setShowError(true);
		}
		/* } else {
            setErrorText('No puedes enviar campos vacios');
            setShowError(true);
        } */
		consultarCarpetas();
	};

	const onSelect = (id) => {
		const temp = carpetas.filter((item) => {
			return item.id_carpeta === id;
		});
		console.log(temp[0].trabajos);
		setIdSelected(id);
		setPages(temp[0].trabajos);
	};

	const onOpenWork = (id_work) =>{
		const temp = carpetas.filter((item) => {
			return item.id_carpeta === idSelected;
		});

		navigate(`/work/${temp[0].titulo_carpeta}/${idSelected}/${id_work}`)
	}

	return (
		<>
			<div className='row p-4'>
				<div className='col-4'>
					<div className='row p-0'>
						<h4>Carpetas:</h4>
					</div>
					{carpetas.map((carp, i) => (
						<div key={i} className='row'>
							<FilaProyecto item={carp} current_selected={idSelected} onSelect={onSelect} onUpdate={consultarCarpetas} />
						</div>
					))}
					<div className='row'>
						<div className='col-md-9 mt-3'>
							<label htmlFor='carpeta'>Agregar nueva carpeta</label>
							<input type='text' className='form-control nombreC' id='nombrec' name='nombrec' placeholder='Nombre de la carpeta' value={nombre} onChange={handleNombre} />
						</div>
						<button type='submit' onClick={crearCarpeta} className='btn btn-outline-primary col-md-3 icon-crear'>
							Agregar
						</button>
						{showError && (
							<h6 className='mt-4' style={{ color: 'darkred' }}>
								{errorText}
							</h6>
						)}
						{showSuccess && (
							<h6 className='mt-4' style={{ color: 'green' }}>
								{successText}
							</h6>
						)}
					</div>
				</div>
				<div className='col-8'>
					<PreviewPag pages={pages} onSelect={onOpenWork} />
				</div>
			</div>
		</>
	);
};

export default Carpetas;
