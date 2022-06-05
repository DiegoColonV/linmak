/* 
    Clase que muestra el conjunto de páginas en la previsualización
    return: Contenedor con las páginas que se previsualizan
    props:
        * pages: arreglo con las páginas
*/

import { useState } from 'react';

const PreviewCard = ({ loading, item, openSaved, onDeleteWork, editSaved, downloadSaved, userData, onUpdate, idFolder }) => {
	const [edit, setEdit] = useState(false);
	const [textEdit, setTextEdit] = useState('');

	const onSendEdit = async () => {
		if (textEdit === '') return;
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ id_work: item.id_trabajo, new_name: textEdit.trim(), id_folder: idFolder }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/update/work`, requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);
		setEdit(false);
		onUpdate();
	};

	const handleText = (e) => {
		setTextEdit(e.target.value);
	};

	return (
		<>
			<div className='preview-card'>
				<div className='icon-delete-folder' onClick={() => onDeleteWork(item.id_trabajo)}>
					<i className='bx bxs-trash'></i>
				</div>
				<div className='icon-delete-folder see' onClick={() => openSaved(item.id_trabajo, item.pagetype, true)}>
					<i className='bx bx-show'></i>
				</div>
				<div className='icon-delete-folder edit' onClick={() => editSaved(item)}>
					<i className='bx bx-edit'></i>
				</div>
				{userData.plan === 'LM' && (
					<div className='icon-delete-folder download' onClick={() => downloadSaved(item)}>
						{loading ? <i className='bx bx-loader-alt bx-spin'></i> : <i className='bx bx-download'></i>}
					</div>
				)}
				<div className='preview-title'>
					<p>{item.titulo_trabajo}</p>
				</div>
				<div className='preview-body'>
					<div className='change-name' onClick={() => setEdit(!edit)}>
						Cambiar nombre
					</div>
					{/* <img src={images[this.props.img]} className='preview-img' /> */}
				</div>
				{edit && (
					<div className='row d-flex mt-2 mb-4'>
						<div className='col-8'>
							<input value={textEdit} type='text' className='form-control' id='newname' placeholder='Nuevo nombre' onChange={handleText} />
						</div>
						<div className='col-2'>
							<div className='icon-edit-folder' onClick={onSendEdit}>
								<i className='bx bx-check-circle'></i>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

const PreviewPag = (props) => {
	const comps = props.pages.map((pag, i) => {
		return <PreviewCard key={i} item={pag} {...props} />;
	});

	return <div className='preview-cont'>{comps}</div>;
};

export default PreviewPag;
