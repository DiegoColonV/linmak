import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import * as actions from '../../redux/actions/editIntActions';
import ChangesModal from './ChangesModal';
import ConfirmChangesModal from './ConfirmChangesModal';

const BottomButtons = ({ cat_change, id_change, text_change, onReload }) => {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.objEditInt);

	const [showAlert, setShowAlert] = useState(false);
	const [alertText, setAlertText] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [modalConfirm, setModalConfirm] = useState(false);

	if (showAlert) {
		setTimeout(() => {
			setShowAlert(false);
		}, 2000);
	}

	const handleSaveChange = () => {
		let isRepited = false;

		list[cat_change].map((item) => {
			if (item.id_change === id_change) isRepited = true;
		});

		if (text_change !== null && text_change !== '') {
			const obj = {
				id_change: id_change,
				text: text_change,
			};
			switch (cat_change) {
				case 'category':
					if (isRepited) {
						dispatch(actions.deleteItemCat(id_change));
					}
					dispatch(actions.addEditCat(obj));
					break;
				case 'ambit':
					if (isRepited) {
						dispatch(actions.deleteItemAmbit(id_change));
					}
					dispatch(actions.addEditAmbit(obj));
					break;
				case 'style':
					if (isRepited) {
						dispatch(actions.deleteItemStyle(id_change));
					}
					dispatch(actions.addEditStyle(obj));
					break;
				case 'color':
					dispatch(actions.deleteItemColor('elem-color-text'));
					dispatch(actions.deleteItemColor('elem-color-order'));
					dispatch(actions.addEditColor(obj));
					break;
				case 'font':
					if (isRepited) {
						dispatch(actions.deleteItemFont(id_change));
					}
					dispatch(actions.addEditFont(obj));
					break;
				case 'buttons':
					if (isRepited) {
						dispatch(actions.deleteItemBtns(id_change));
					}
					dispatch(actions.addEditBtns(obj));
					break;
				case 'navbar':
					if (isRepited) {
						dispatch(actions.deleteItemNav(id_change));
					}
					dispatch(actions.addEditNav(obj));
					break;
				case 'footer':
					if (isRepited) {
						dispatch(actions.deleteItemFoot(id_change));
					}
					dispatch(actions.addEditFoot(obj));
					break;
				case 'textfield':
					if (isRepited) {
						dispatch(actions.deleteItemTF(id_change));
					}
					dispatch(actions.addEditTF(obj));
					break;

				default:
					break;
			}
			setAlertText('¡Cambios agregados a la lista!')
			setShowAlert(true);
		}
	};

	const handleDeleteChange = (cat, id) => {
		switch (cat) {
			case 'category':
				dispatch(actions.deleteItemCat(id));
				break;
			case 'ambit':
				dispatch(actions.deleteItemAmbit(id));
				break;
			case 'style':
				dispatch(actions.deleteItemStyle(id));

				break;
			case 'color':
				dispatch(actions.deleteItemColor(id));

				break;
			case 'font':
				dispatch(actions.deleteItemFont(id));

				break;
			case 'buttons':
				dispatch(actions.deleteItemBtns(id));

				break;
			case 'navbar':
				dispatch(actions.deleteItemNav(id));

				break;
			case 'footer':
				dispatch(actions.deleteItemFoot(id));

				break;
			case 'textfield':
				dispatch(actions.deleteItemTF(id));
				break;
			default:
				break;
		}
	};

	const handleShowList = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleCloseConfirm = () =>{
		setModalConfirm(false)
	}

	const handleOpenConfirm = () =>{
		setModalConfirm(true)
	}

	const makeArray = (list) =>{
		let temp = []

		for(const key in list){
			if(list[key].length > 0 && key !== 'folder' && key !== 'link'){
				console.log(list[key])
				list[key].map((item) =>{
					if(item.id_change === 'elem-color-order'){
						temp.push({type: item.id_change, color: [item.text.first, item.text.second, item.text.third, item.text.fourth]})
					}
					else{
						temp.push({type: item.id_change, name: item.text})
					}
				})
			}
		}

		return temp
	}

	const handleApply = async () => {

		const data_send = {folder: list.folder, changes: makeArray(list)}
		console.log(data_send);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer token-local`, 'Access-Control-Allow-Origin': '*' },
			body: JSON.stringify(data_send),
		};

		// setLoading(true);

		const data = await fetch('http://25.59.209.228:5000/edit/all', requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);
		dispatch(actions.cleanList())
		handleCloseConfirm()
		setAlertText('¡Cambios aplicados!')
		setShowAlert(true)
		onReload()
		// dispatch(addLink(dataJson.url))
		// setLoading(false);

		//navigate('/editar/estructura')
	};

	return (
		<>
			{showAlert && (
				<div className='row'>
					<div className='alert alert-success alert-edit-save position-absolute' role='alert' style={{ textAlign: 'center' }}>
						<i className='bx bx-check'></i> {alertText}
					</div>
				</div>
			)}
			<ChangesModal open={modalOpen} handleCloseModal={handleCloseModal} list={list} handleDeleteChange={handleDeleteChange} />
			<ConfirmChangesModal open={modalConfirm} handleCloseModal={handleCloseConfirm} list={list} handleSave={handleApply} handleDeleteChange={handleDeleteChange} />
			<div className='d-flex justify-content-center'>
				<button className='btn btn-edit-add position-relative' onClick={handleSaveChange}>
					<i className='bx bx-plus-circle me-3' />
					Agregar
				</button>
			</div>
			{/* <button className='btn btn-edit-list' onClick={handleShowList}>
				<i className='bx bx-list-ul me-3'></i>Lista
			</button> */}
			<button className='btn btn-edit-save' onClick={handleOpenConfirm}>
				<i className='bx bxs-edit'></i>Aplicar
			</button>
			{/* <button className='btn btn-edit-save' onClick={onReload}>
				<i className='bx bx-save me-3'></i>
				recargar
			</button> */}
		</>
	);
};

export default BottomButtons;
