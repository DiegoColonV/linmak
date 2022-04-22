import { useState } from 'react';
import BottomButtons from '../BottomButtons';

const EditCat = () => {
	const [textChange, setTextChange] = useState('');

	const handleCategoryButton = (value) => {
		setTextChange(value.toString());
	};

	return (
		<>
			<div className='row mt-5'>
				<div className='col-md-2 col-sm-5 offset-md-1'>
					<button
						className={textChange === '0' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
						onClick={() => handleCategoryButton(0)}
					>
						<i className='bx bx-home-alt icon-cat-create'></i>
						<br />
						Página principal
					</button>
				</div>
				<div className='col-md-2 col-sm-5'>
					<button
						className={textChange === '1' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
						onClick={() => handleCategoryButton(1)}
					>
						<i className='bx bxs-contact icon-cat-create'></i>
						<br />
						Contacto
					</button>
				</div>
				<div className='col-md-2 col-sm-5'>
					<button
						className={textChange === '2' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
						onClick={() => handleCategoryButton(2)}
					>
						<i className='bx bx-news icon-cat-create'></i>
						<br />
						Conócenos
					</button>
				</div>
				<div className='col-md-2 col-sm-5'>
					<button
						className={textChange === '3' ? 'btn btn-outline-primary btn-cat-create shadow cat-active' : 'btn btn-outline-primary btn-cat-create shadow'}
						onClick={() => handleCategoryButton(3)}
					>
						<i className='bx bx-cart-alt icon-cat-create'></i>
						<br />
						Carrito
					</button>
				</div>
				<div className='col-md-2 col-sm-5'>
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
			<BottomButtons cat_change='category' id_change='estr_category' text_change={textChange} />
		</>
	);
};

export default EditCat;
