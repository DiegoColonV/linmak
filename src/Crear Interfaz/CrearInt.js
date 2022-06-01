import { Outlet, Link, useNavigate } from 'react-router-dom';
import './crearint.css';
import { useSelector } from 'react-redux';
import NavCrearInt from './NavCrearInt';

// STEP:
// Categoría: 0
// Ámbito: 1
// Estilo: 2
// Color: 3
// Fuente: 4

function CrearInt() {
	const obj = useSelector((state) => state.objTxtInt.txt_int);
	const step = useSelector((state) => state.getUIProgress.progress);
	const navigate = useNavigate()

	return (
		<>
			<header id='header' className='fixed-top nav-create'>
				<div className='container d-flex align-items-center '>
					<div className='logo'>
						<img src="/img/logo.png" alt="" class="img-fluid" onClick={() => navigate('/')}/> 
						{/* Uncomment below if you prefer to use an image logo */}
						{/* <a href="index.html"><img src="img/logo.png" alt="" class="img-fluid"></a>*/}
					</div>
					{/* .navbar */}
					<NavCrearInt />
				</div>
			</header>
			<div id='create' className='container-create'>
				{/* <div className='row mt-5 ms-5'>
					Cat: {obj.categoria}, Ambito: {obj.ambito}, Estilo: {obj.estilo}, Color: {obj.color}, Fuente: {JSON.stringify(obj.fuente)}
				</div> */}
				<br />
				<div className='row'>
				<Outlet />
				</div>
				<div className='row fixed-bottom mb-5'>
					<div className='progress'>
						<div className='progress-bar' role='progressbar' style={{ width: `${(step * 100) / 5}%` }}></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CrearInt;
