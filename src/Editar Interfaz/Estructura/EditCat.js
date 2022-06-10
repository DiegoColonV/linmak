import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLink } from '../../redux/actions/editIntActions';
import { addCategoria } from '../../redux/actions/txtIntActions';
import BottomButtons from '../components/BottomButtons';

const EditCat = ({onReload}) => {
	const [textChange, setTextChange] = useState('');

	const objEdit = useSelector((state) => state.objEditInt);
	const objCreate = useSelector((state) => state.objTxtInt.txt_int);
	const objSelected = useSelector((state) => state.objSelectInt.selected);

	const editingSaved = useSelector((state) => state.getUIProgress.edit_saved);
	const idWorkSelected = useSelector((state) => state.getUIProgress.id_work);
	const idFolderSelected = useSelector((state) => state.getUIProgress.id_folder);

	const dispatch = useDispatch()

	const setFile = (cat) => {
		switch (cat) {
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

	const setPTindex = (val) =>{
		switch (val) {
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
	}

	const handleCategoryButton = async(value) => {

		if(editingSaved){
			const data2send = {
				id_work: idWorkSelected,
				id_folder: idFolderSelected,
				new_pagetype: setPTindex(value)
			}

			console.log(data2send)
	
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
				body: JSON.stringify(data2send),
			};
			const data = await fetch(`${process.env.REACT_APP_API_URL}/edit/pagetypeSaved`, requestOptions);
			const dataJson = await data.json();
			console.log(dataJson);
	
			dispatch(addLink(dataJson.url))
			//dispatch(addCategoria(value))
	
			onReload()
		}
		else{
			const data2send = {
				folder: objEdit.folder,
				pagetype: setFile(objCreate.categoria).toLowerCase(),
				mock: objSelected.int[1],
				new_pagetype: setFile(value).toLowerCase()
			}

			console.log(data2send)
	
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
				body: JSON.stringify(data2send),
			};
			const data = await fetch(`${process.env.REACT_APP_API_URL}/edit/pagetypeTemp`, requestOptions);
			const dataJson = await data.json();
			console.log(dataJson);
	
			dispatch(addLink(dataJson.url))
			dispatch(addCategoria(value))
	
			onReload()
		}

		
	};

	return (
		<>
			<h1 className='section-title-edit mt-5'>CATEGORÍA</h1>
			<div className='row mt-5'>
				<div className='row col-10 offset-1 mt-5 d-flex justify-content-center'>
					<div className='col-md-2'>
						<button
							className={textChange === '0' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
							onClick={() => handleCategoryButton(0)}
						>
							<i className='bx bx-home-alt icon-cat-create'></i>
							<br />
							Página principal
						</button>
					</div>
					<div className='col-md-2'>
						<button
							className={textChange === '1' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
							onClick={() => handleCategoryButton(1)}
						>
							<i className='bx bxs-contact icon-cat-create'></i>
							<br />
							Contacto
						</button>
					</div>
					<div className='col-md-2'>
						<button
							className={textChange === '2' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
							onClick={() => handleCategoryButton(2)}
						>
							<i className='bx bx-news icon-cat-create'></i>
							<br />
							Conócenos
						</button>
					</div>
					<div className='col-md-2'>
						<button
							className={textChange === '3' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
							onClick={() => handleCategoryButton(3)}
						>
							<i className='bx bx-cart-alt icon-cat-create'></i>
							<br />
							Carrito
						</button>
					</div>
					<div className='col-md-2'>
						<button
							className={textChange === '4' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
							onClick={() => handleCategoryButton(4)}
						>
							<i className='bx bxs-user-account icon-cat-create'></i>
							<br />
							Iniciar sesión
						</button>
					</div>
				</div>
			</div>
			{/* <BottomButtons cat_change='category' id_change='estr_category' text_change={textChange} onReload={onReload} /> */}
		</>
	);
};

export default EditCat;
