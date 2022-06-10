import { createRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createFileName, useScreenshot } from 'use-react-screenshot';
import AlertGeneral from '../../Componentes Generales/AlertGeneral';
import SaveModal from './SaveModal';

const DoneButtons = ({ link, onShowModal, objEdit, objSelected, objCreateInt, refIframe }) => {
	const [modalSave, setModalSave] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [variantAlert, setVariantAlert] = useState('success') 
	const [textAlert, setTextAlert] = useState('Guardado con éxito')
	const userData = useSelector((state) => state.usrData) 
	const navigate = useNavigate()

	if (showAlert) {
		setTimeout(() => {
			setShowAlert(false);
		}, 2500);
	}

	const onShowAlert = (variant, text) =>{
		setShowAlert(true)
		setVariantAlert(variant)
		setTextAlert(text)
	}

	const onShowModalSave = () => {
		setModalSave(true);
	};

	const onCloseModalSave = () => {
		setModalSave(false);
	};

	const onExpand = () => {
		window.open(link);
	};

	const setPagetype = () => {
		switch (objCreateInt.categoria) {
			case 0:
				return 'index';

			case 1:
				return 'contact';

			case 2:
				return 'about';

			case 3:
				return 'cart';

			case 4:
				return 'login';

			default:
				break;
		}
	};

	const setIdPagetype = () => {
		switch (objCreateInt.categoria) {
			case 0:
				return 1;

			case 1:
				return 3;

			case 2:
				return 2;

			case 3:
				return 4;

			case 4:
				return 5;

			default:
				break;
		}
	};

	const totalUserWorks = async() =>{
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({}),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/view/carpeta`, requestOptions);
		const dataJson = await data.json();
		console.log(dataJson.data);

		let totalworks = 0
		dataJson.data.map((item) =>{
			totalworks = totalworks + item.trabajos.length
		}) 

		const totalfolders = dataJson.data.legth

		return {totalworks, totalfolders}
	}

	const onSave = async (name, id_folder) => {
		const token_local = localStorage.getItem('token');

		if (!token_local || token_local === 'token-local' || token_local === 'log_in_init' || token_local === '') {
			onShowModal();
		} 
		else {

			const {totalworks} = await totalUserWorks()
			
			if(userData.plan === 'I' && totalworks >= 3){
				setShowAlert(true)
				setTextAlert('Solo puedes guardar 3 hasta interfaces con tu tipo de plan')
				setVariantAlert('danger')
				onCloseModalSave();
				return
			}
			
			if(userData.plan === 'A' && totalworks >= 10){
				setShowAlert(true)
				setTextAlert('Solo puedes guardar hasta 10 interfaces con tu tipo de plan')
				setVariantAlert('danger')
				onCloseModalSave();
				return
			}

			const data2send = {
				id_mock: objSelected.selected.int[0],
				id_font: objSelected.selected.font[0],
				id_color: objSelected.selected.color[0],
				name: name,
				pagetype: setPagetype(),
				id_pagetype: setIdPagetype(),
				folder: objEdit.folder,
				id_folder: id_folder,
				mock: objSelected.selected.int[1].toLowerCase(),
			};
			console.log(data2send);

			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`, 'Access-Control-Allow-Origin': '*' },
				body: JSON.stringify(data2send),
			};

			const data = await fetch(`${process.env.REACT_APP_API_URL}/save/newWork`, requestOptions);
			const dataJson = await data.json();
			console.log(dataJson);

			onCloseModalSave();
			setShowAlert(true);
			setTextAlert('Guardado con éxito')
			setVariantAlert('success')
			navigate('/perfil')
		}
	};

	return (
		<>
			<SaveModal onShowAlert={onShowAlert} open={modalSave} onClose={onCloseModalSave} onSave={onSave} />
			<AlertGeneral show={showAlert} text={textAlert} variant={variantAlert} />
			<div className='done-buttons-container'>
				<Button variant='success'>
					<i className='bx bx-check'></i>
				</Button>
				<br />
				<Button variant='success' onClick={onExpand}>
					<i className='bx bx-expand'></i>
				</Button>
				<br />
				<Button variant='success' onClick={userData.autenticado ? onShowModalSave : onShowModal}>
					<i className='bx bxs-save'></i>
				</Button>
			</div>
		</>
	);
};

export default DoneButtons;
