import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import * as actions from '../../redux/actions/editIntActions';
import ChangesModal from './ChangesModal';

const BottomButtons = ({ cat_change, id_change, text_change }) => {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.objEditInt);

	const [showAlert, setShowAlert] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

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

	return (
		<>
			{showAlert && (
				<div className='row'>
					<div className='alert alert-success alert-edit-save position-absolute' role='alert' style={{ textAlign: 'center' }}>
						<i className='bx bx-check'></i> ¡Cambios agregados!
					</div>
				</div>
			)}
			<ChangesModal open={modalOpen} handleCloseModal={handleCloseModal} list={list} handleDeleteChange={handleDeleteChange} />

			<div className='row d-flex justify-content-center align-items-center position-absolute btns-edit-container'>
				<button className='btn btn-edit-add position-relative' onClick={handleSaveChange}>
					<i className='bx bx-plus-circle me-3' />
					Agregar
				</button>
				<button className='btn btn-edit-list' onClick={handleShowList}>
					<i className='bx bx-list-ul me-3'></i>
					Lista
				</button>
				<button className='btn btn-edit-save'>
					<i className='bx bx-save me-3'></i>
					Aplicar
				</button>
			</div>
		</>
	);
};

export default BottomButtons;
