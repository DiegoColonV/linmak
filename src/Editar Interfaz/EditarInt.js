import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavEditInt from './components/NavEditInt';
import './editarint.css';
import { useState } from 'react';
import DoneButtons from './components/DoneButtons';
import EditarElem from './EditarElem';
import EditarEstr from './EditarEstr';
import AlertRegister from './components/AlertRegister';

function EditarInt() {
	const [activeTab, setActiveTab] = useState(1);
	const objEdit = useSelector((state) => state.objEditInt);
	const objSelected = useSelector((state) => state.objSelectInt);
	const objCreateInt = useSelector((state) => state.objTxtInt.txt_int);
	const [reload, setReload] = useState(0);
	const  [registerModal, setRegisterModal] = useState(false)

	const onChangeTab = () => {
		if (activeTab === 1) setActiveTab(2);
		else setActiveTab(1);
	};

	const onReload = () =>{
		setReload(reload + 1)
	}

	const onCloseRegister = () =>{
		setRegisterModal(false)
	}

	const onShowModal = () =>{
		setRegisterModal(true)
	}

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
					<div className='col-5 vista-previa p-0'>
						{/* <img style={{ width: '100%' }} src='/img/preview/prev.png' /> */}
						<iframe key={reload} src={`http://25.59.209.228:5000${objEdit.link}`} loading='lazy' style={{ width: '166.6%', height: '166.6%', transform: 'scale(0.6)', transformOrigin: '0 0' }}></iframe>
					</div>
					<div className='col-7 position-relative'>
						{
							{
								2: <EditarElem onReload={onReload} />,
								1: <EditarEstr onReload={onReload} />,
							}[activeTab]
						}
						<DoneButtons link={`http://25.59.209.228:5000${objEdit.link}`} onShowModal={onShowModal} objEdit={objEdit} objSelected={objSelected} objCreateInt={objCreateInt} />
					</div>
				</div>
			</section>
			<AlertRegister open={registerModal} onClose={onCloseRegister} />
		</>
	);
}

export default EditarInt;