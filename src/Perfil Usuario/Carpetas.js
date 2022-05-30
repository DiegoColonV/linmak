import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

	useEffect(() => {
		consultarCarpetas();
	}, []);

	const consultarCarpetas = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({}),
		};
		const data = await fetch('http://25.59.209.228:5000/view/carpeta', requestOptions);
		const dataJson = await data.json();

		console.log(dataJson.data);
		setCarpetas(dataJson.data);
	};

	const handleNombre = (e) => {
		setNombre(e.target.value);
	};

	const limpiar = () => {
		setNombre('');
	};

	const crearCarpeta = async (e) => {
		setShowError(false);
		setShowSuccess(false);
		e.preventDefault();
		/*if (nombre === ' ') {*/
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ nombre: nombre }),
		};
		const data = await fetch('http://25.59.209.228:5000/insert/carpeta', requestOptions);
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

	const openSaved = async (id, pagetype) => {
		const temp = carpetas.filter((item) => {
			return item.id_carpeta === idSelected;
		});

		const data2send = { id_folder: temp[0].id_carpeta, folder: temp[0].titulo_carpeta, pagetype: pagetype.toLowerCase(), id_work: id };

		console.log(data2send);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify(data2send),
		};
		const data = await fetch('http://25.59.209.228:5000/view/work', requestOptions);
		const dataJson = await data.json();

		console.log(dataJson);

		window.open(`http://25.59.209.228:5000/${dataJson.url}`);
	};

	const onDeleteWork = async(id_work) =>{
		const temp = carpetas.filter((item) => {
			return item.id_carpeta === idSelected;
		});

		const data2send = {id_work: id_work, folder: temp[0].titulo_carpeta}
		console.log(data2send)

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify(data2send),
		};
		const data = await fetch('http://25.59.209.228:5000/delete/work', requestOptions);
		const dataJson = await data.json();

		console.log(dataJson);

		await consultarCarpetas();

		onSelect(idSelected)
	}

	return (
		<>
			<div className='row p-4'>
				<div className='col-4'>
					<div className='row'>
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
					<PreviewPag pages={pages} openSaved={openSaved} onDeleteWork={onDeleteWork} />
				</div>
			</div>
		</>
	);
};

export default Carpetas;
