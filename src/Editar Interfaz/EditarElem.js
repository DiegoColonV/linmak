import { useState } from 'react';
import { useSelector } from 'react-redux';
import InfoModal from './components/InfoModal';
import EditButtons from './Elementos/EditButtons';
import EditColor from './Elementos/EditColor';
import EditFont from './Elementos/EditFont';
import EditFooter from './Elementos/EditFooter';
import EditNavbar from './Elementos/EditNavbar';
import EditTextfield from './Elementos/EditTextfield';

const EditarElem = ({ onReload }) => {
	const [selected, setSelected] = useState('colores');
	const selectedObj = useSelector((state) => state.objSelectInt.selected);
	const  [infoModal, setInfoModal] = useState(false)
	const [typeModal, setTypeModal] = useState('')

	const handleSelected = (id) => {
		setSelected(id);
	};

	const onCloseInfoModal = () =>{
		setInfoModal(false)
	}

	const onOpenInfoModal = (type) =>{
		setInfoModal(true)
		setTypeModal(type)
	}

	return (
		<>
		<InfoModal open={infoModal} onClose={onCloseInfoModal} type={typeModal} />
		<div className='edit-estr-container h-100'>
			<div className='row top-part d-flex justify-content-center'>
				<OptionButton text={'Colores'} id={'colores'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Fuente'} id={'fuente'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Botones'} id={'botones'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Barra de navegación'} id={'navbar'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Footer'} id={'footer'} selected={selected} handleSelected={handleSelected} />
				<OptionButton text={'Cuadros de texto'} id={'text'} selected={selected} handleSelected={handleSelected} />
			</div>
			<hr style={{ color: '#8080ff' }} />
			<div className='position-relative'>
				{
					{
						colores: <EditColor selected={selectedObj.color} onReload={onReload}/>,
						fuente: <EditFont selected={selectedObj.font} onReload={onReload} />,
						botones: <EditButtons onReload={onReload} openInfo={onOpenInfoModal} />,
						navbar: <EditNavbar onReload={onReload} openInfo={onOpenInfoModal} />,
						footer: <EditFooter onReload={onReload} openInfo={onOpenInfoModal} />,
						text: <EditTextfield onReload={onReload} openInfo={onOpenInfoModal} />,
					}[selected]
				}
			</div>
		</div>
		</>
	);
};

const OptionButton = ({ text, id, selected, handleSelected }) => {
	const isSelected = selected === id;
	let icon = null;
	switch (id) {
		case 'colores':
			icon = <i className='bx bx-palette'></i>;
			break;
		case 'fuente':
			icon = <i className='bx bx-font'></i>;
			break;
		case 'botones':
			icon = <i className='bx bx-square-rounded'></i>;
			break;
		case 'navbar':
			icon = <i className='bx bx-dock-top'></i>;
			break;
		case 'footer':
			icon = <i className='bx bx-dock-top bx-rotate-180'></i>;
			break;
		case 'text':
			icon = <i className='bx bx-message-square-detail'></i>;
			break;
	}

	return (
		<>
			<div className={`col-6`}>
				<div className={`select-option-container ${isSelected && 'soc-selected'}`} onClick={() => handleSelected(id)}>
					{icon}
					{text}
				</div>
			</div>
		</>
	);
};

export default EditarElem;
