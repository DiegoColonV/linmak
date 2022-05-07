import { useState } from 'react';
import { FormCheck, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DisplayColor from './components/DisplayColor';
import DisplayFont from './components/DisplayFont';
import DisplayInt from './components/DisplayInt';

const ElegirInt = () => {
	const options = useSelector((state) => state.objSelectInt);
	const [nightMode, setNightMode] = useState(false);

	const [selected, setSelected] = useState({ color: -1, int: -1, font: -1 });
	
	const [modalExpand, setModalExpand] = useState(false)
	const [nameExpand, setNameExpand] = useState('')

	const onSelectColor = (id) => {
		setSelected({ ...selected, color: id });
	};

	const onSelectInt = (id) => {
		setSelected({ ...selected, int: id });
	};

	const onSelectFont = (id) => {
		setSelected({ ...selected, font: id });
	};

	const onExpand = (name_int) =>{
		setModalExpand(true)
		setNameExpand(name_int)
	}

	return (
		<>
		<Modal style={{borderRadius: 50}} centered show={modalExpand} onHide={() => setModalExpand(false)}>
			<img  src={`/img/previews/${nameExpand.toLowerCase()}.png`} />
		</Modal>
			<div className='container'>
				<div className='row mb-3 mt-3'>
					<h1 className='section-title'>Elige los valores que deseas</h1>
				</div>
				<div className='row'>
					<div className='col-4'>
						<h3 className='select-int-titles'>Colores</h3>
						<div className='d-flex align-items-center mx-auto' style={{ fontSize: 26, width: 165 }}>
							{nightMode ? <i className='bx bx-sun' style={{ marginRight: 30 }}></i> : <i className='bx bxs-sun' style={{ marginRight: 30 }}></i>}
							<FormCheck type='switch' inline onChange={() => setNightMode(!nightMode)} />
							{!nightMode ? <i className='bx bx-moon'></i> : <i className='bx bxs-moon'></i>}
						</div>
						{options.options.colors.map((item, i) => (
							<div className='row' key={i}>
								<DisplayColor palette={item} night={nightMode} selected={item[0] === selected.color} onSelect={onSelectColor} />
							</div>
						))}
					</div>
					<div className='col-4'>
						<h3 className='select-int-titles' style={{ marginBottom: 47 }}>
							Interfaz base
						</h3>
						{options.options.ints.map((item, i) => (
							<div className='row' key={i}>
								<DisplayInt int={item} selected={item[0] === selected.int} onSelect={onSelectInt} onExpand={onExpand} />
							</div>
						))}
					</div>
					<div className='col-4'>
						<h3 className='select-int-titles' style={{ marginBottom: 47 }}>
							Fuente
						</h3>
						{options.options.fonts.map((item, i) => (
							<div className='row' key={i}>
								<DisplayFont font={item} selected={item[0] === selected.font} onSelect={onSelectFont} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ElegirInt;
