import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavEditInt from './components/NavEditInt';
import './editarint.css';
import { useState } from 'react';

function EditarInt() {
	const [activeTab, setActiveTab] = useState(1);

	const onChangeTab = () => {
		if (activeTab === 1) setActiveTab(2);
		else setActiveTab(1);
	};

	return (
		<>
			<header id='header' className='nav-create pt-3'>
				<div className='container d-flex align-items-center '>
					<div className='logo'>
						<h1>
							<Link to='/'>linmak</Link>
						</h1>
					</div>
					{/* .navbar */}
					<NavEditInt activeTab={activeTab} onChangeTab={onChangeTab} />
				</div>
			</header>
			<section id='edit' className='container-create'>
				<div className='row'>
					<div className='col-5 vista-previa'></div>
					<div className='col-7'>
						<Outlet />
					</div>
				</div>
			</section>
		</>
	);
}

export default EditarInt;
