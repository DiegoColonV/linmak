import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmModal from '../Componentes Generales/ConfirmModal';
import { addLink } from '../redux/actions/editIntActions';
import { selectColor, selectFont } from '../redux/actions/selectedIntActions';
import { setEditSaved, setIdFolder, setIdWork } from '../redux/actions/uiActions';
import './work.css';

const Work = () => {
	const params = useParams();
	const [work, setWork] = useState(null);
	const [link, setLink] = useState('');
	const [loading, setLoading] = useState(false);
	const [modalDelete, setModalDelete] = useState(false);
	const [editText, setEditText] = useState(false);
	const [textEdit, setTextEdit] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		getWork();
	}, []);

	const getWork = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ id_work: params.id_work }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/view/describeWork`, requestOptions);
		const dataJson = await data.json();

		console.log(dataJson.work);
		setWork(dataJson.work);

		getLink(dataJson.work.pagetype.toLowerCase(), false);
	};

	const getLink = async (pagetype) => {
		const data2send = { id_folder: params.id_folder, folder: params.folder, pagetype: pagetype, id_work: params.id_work };

		console.log(data2send);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify(data2send),
		};

		const data = await fetch(`${process.env.REACT_APP_API_URL}/view/work`, requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);
		setLink(dataJson.url);

		return dataJson.url;
	};

	const onSee = () => {
		window.open(`${process.env.REACT_APP_API_URL}/${link}`);
	};

	const onDownload = async () => {
		setLoading(true);
		try {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
				body: JSON.stringify({ id_work: params.id_work, id_folder: params.id_folder }),
			};
			const data = await fetch(`${process.env.REACT_APP_API_URL}/download/saved`, requestOptions);

			const dataJson = await data.json();
			setLoading(false);

			window.open(`${process.env.REACT_APP_API_URL}${dataJson.url}`, '_blank');

			console.log(dataJson);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	const onEdit = async () => {
		dispatch(selectColor([work.id_color, work.color_primario, work.color_secundario, work.color_tercero, work.color_cuarto]));
		dispatch(selectFont([0, '', 'seriff', 1, 1, 1, 1]));
		dispatch(setEditSaved(true));
		dispatch(addLink(link));
		dispatch(setIdWork(params.id_work));
		dispatch(setIdFolder(params.id_folder));
		navigate('/editar');
	};

	const onDelete = async () => {
		const data2send = { id_work: params.id_work, folder: params.folder };
		console.log(data2send);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify(data2send),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/delete/work`, requestOptions);
		const dataJson = await data.json();

		console.log(dataJson);

		navigate('/perfil');
	};

	const onEditName = async () => {
		if (textEdit === '') return;
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ id_work: params.id_work, new_name: textEdit.trim(), id_folder: params.id_folder }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/update/work`, requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);
		setEditText(false);
		setTextEdit('');
		getWork();
	};

	const handleText = (e) => {
		setTextEdit(e.target.value);
	};

	return (
		<>
			{work && (
				<>
					<ConfirmModal title='¿Eliminar interfaz?' body='La interfaz se borrará permanentemente' onSave={onDelete} open={modalDelete} onClose={() => setModalDelete(false)} />
					<div className='work-header d-flex align-items-center m-0'>
						<div className='col-1'>
							<img src='/img/logo.png' style={{width: 100, cursor: 'pointer'}} onClick={() => navigate('/')}></img>
						</div>
						<div className='col-3 ms-4 d-flex align-items-center'>
							{!editText ? (
								<>
									<h2 className='d-d-inline-block m-0'>{work.titulo_trabajo}</h2>
									<i className='bx bx-edit-alt d-inline-block ps-3' onClick={() => setEditText(true)}></i>
								</>
							) : (
								<div className='row d-flex align-items-center'>
									<div className='col-8'>
										<input value={textEdit} type='text' className='form-control' id='newname' placeholder='Nuevo nombre' onChange={handleText} />
									</div>
									<div className='col-2'>
										<i className='bx bx-check-circle' onClick={onEditName}></i>
									</div>
									<div className='col-2'>
										<i className='bx bx-x-circle' onClick={() => setEditText(false)}></i>
									</div>
								</div>
							)}
						</div>
						<div className='col'></div>
						<div className='col-1'>
							<i className='bx bxs-download' onClick={onDownload}></i>
						</div>
						<div className='col-1'>
							<i className='bx bx-edit' onClick={onEdit}></i>
						</div>
						<div className='col-1'>
							<i className='bx bx-show' onClick={onSee}></i>
						</div>
						<div className='col-1'>
							<i className='bx bxs-trash' onClick={() => setModalDelete(true)}></i>
						</div>
					</div>
					<div className='row m-0'>
						<div className='col-12 work-prev m-0 p-0'>
							<iframe
								src={`${process.env.REACT_APP_API_URL}/${link}`}
								style={{ width: '100%', height: '100%',  }}
							></iframe>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Work;
