import { useState } from 'react';
import { FormCheck, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUIProgress } from '../redux/actions/uiActions';
import DisplayColor from './components/DisplayColor';
import DisplayFont from './components/DisplayFont';
import DisplayInt from './components/DisplayInt';
import { selectColor, selectFont, selectInt } from '../redux/actions/selectedIntActions';
import { addFolder, addLink, addPosiblePages } from '../redux/actions/editIntActions';

const ElegirInt = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const options = useSelector((state) => state.objSelectInt);
	const objInt = useSelector((state) => state.objTxtInt);
	const [nightMode, setNightMode] = useState(false);
	const [selected, setSelected] = useState({ color: -1, int: -1, font: -1 });
	const [loading, setLoading] = useState(false);
	const [modalExpand, setModalExpand] = useState(false);
	const [nameExpand, setNameExpand] = useState('');

	const onSelectColor = (item) => {
		dispatch(selectColor(item));
		setSelected({ ...selected, color: item[0] });
	};

	const onSelectInt = (item) => {
		dispatch(selectInt(item));
		setSelected({ ...selected, int: item[0] });
	};

	const onSelectFont = (item) => {
		dispatch(selectFont(item));
		setSelected({ ...selected, font: item[0] });
	};

	const onExpand = (name_int) => {
		setModalExpand(true);
		setNameExpand(name_int);
	};

	const handleStep = (step, path) => {
		dispatch(setUIProgress(step));
		navigate(path);
	};

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

	const sendSelected = async () => {
		const _file = setFile(objInt.txt_int.categoria);

		const data_send = {
			color: options.selected.color,
			int: [options.selected.int[0], options.selected.int[1].toLowerCase()],
			font: [options.selected.font[0], options.selected.font[1]],
			file: _file,
		};
		console.log(data_send);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer token-local`, 'Access-Control-Allow-Origin': '*' },
			body: JSON.stringify(data_send),
		};

		setLoading(true);

		const data = await fetch('http://25.59.209.228:5000/edit/mock', requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);
		dispatch(addLink(dataJson.url))
		dispatch(addFolder(dataJson.folder))
		dispatch(addPosiblePages(dataJson.categories))
		setLoading(false);

		navigate('/editar')
	};

	return (
		<>
			<Modal style={{ borderRadius: 50 }} centered show={modalExpand} onHide={() => setModalExpand(false)}>
				<img src={`/img/previews/${nameExpand.toLowerCase()}.png`} />
			</Modal>
			{!loading ? (
				<div>
					<div className='row mb-3 mt-3'>
						{JSON.stringify(options.selected)}
						<h1 className='section-title'>Elige los valores que deseas</h1>
					</div>
					<div className='row'>
						<div className='col-md-1 col-xs-12 d-flex justify-content-center me-5'>
							<button type='button' className='btn btn-lg left-button-create' onClick={() => handleStep(4, '/crear/fuente')}>
								<div className='d-flex'>
									<i className='bx bxs-left-arrow mt-auto mb-auto me-4'></i>
									<p>
										Anterior:
										<br />
										<i>Fuente</i>
									</p>
								</div>
							</button>
						</div>
						<div className='col-md-3 col-xs-12'>
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
						<div className='col-md-3 col-xs-12'>
							<h3 className='select-int-titles' style={{ marginBottom: 47 }}>
								Interfaz base
							</h3>
							{options.options.ints.map((item, i) => (
								<div className='row' key={i}>
									<DisplayInt int={item} selected={item[0] === selected.int} onSelect={onSelectInt} onExpand={onExpand} />
								</div>
							))}
						</div>
						<div className='col-md-3 col-xs-12'>
							<h3 className='select-int-titles' style={{ marginBottom: 47 }}>
								Fuente
							</h3>
							{options.options.fonts.map((item, i) => (
								<div className='row' key={i}>
									<DisplayFont font={item} selected={item[0] === selected.font} onSelect={onSelectFont} />
								</div>
							))}
						</div>
						<div className='col-md-1 col-xs-12 d-flex justify-content-center'>
							<button type='button' className='btn btn-lg right-button-create ms-5' onClick={selected.color >= 0 && selected.font >= 0 && selected.int >= 0 ? sendSelected : null}>
								<div className='d-flex'>
									<p>
										VISUALIZAR
										<br />
										INTERFAZ
									</p>
									<i className='bx bxs-right-arrow mt-auto mb-auto ms-4'></i>
								</div>
							</button>
						</div>
					</div>
				</div>
			) : (
				<>
					<div className='loading d-flex justify-content-center mt-5'>
						<img src='/img/loading.gif' />
					</div>
					<h3 style={{ color: '#0069a0', textAlign: 'center' }}>Generando interfaz</h3>
				</>
			)}
		</>
	);
};

export default ElegirInt;
