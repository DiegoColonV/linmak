import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions/editIntActions';

const BottomButtons = ({ cat_change, id_change, text_change }) => {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.objEditInt);

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
					if (isRepited) {
						dispatch(actions.deleteItemColor(id_change));
					}
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
		}
	};

	const handleShowList = () => {
		console.log(list);
	};

	return (
		<div className='row d-flex justify-content-center align-items-center position-absolute btns-edit-container w-100 p-4'>
			<div className='col-3'>
				<button className='btn btn-edit-list' onClick={handleShowList}>
					<i className='bx bx-plus-circle me-3' />
					Lista de cambios
				</button>
			</div>
			<div className='col-3'>
				<button className='btn btn-edit-add' onClick={handleSaveChange}>
					<i className='bx bx-plus-circle me-3' />
					Agregar cambio
				</button>
			</div>
			<div className='offset-3 col-3'>
				<button className='btn btn-edit-save'>
					<i className='bx bx-plus-circle me-3' />
					Guardar cambios
				</button>
			</div>
		</div>
	);
};

export default BottomButtons;
