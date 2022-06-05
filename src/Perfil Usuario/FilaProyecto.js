/* Esta clase muestra las filas de los proyectos 
    return: un elemento tr junto a un elemento td en el que se muestra el nombre del proyecto
    props:
        * name: nombre del proyecto
        * active: nombre del proyecto activo
        * select: función que marca esta fila como seleccionada
*/

import { useState } from 'react';

const FilaProyecto = ({ item, current_selected, onSelect, onUpdate }) => {
	const isSelected = item.id_carpeta === current_selected;
	const [edit, setEdit] = useState(false);
    const [textEdit, setTextEdit] = useState('')

	const onDeleteFolder = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ id_folder: item.id_carpeta }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/delete/carpeta`, requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);
		onUpdate();
	};

    const handleText = (e) =>{
        setTextEdit(e.target.value)
    }

    const onSendEdit = async() =>{
        if(textEdit === '')
            return
        const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ id_carpeta: item.id_carpeta, new_name: textEdit.trim() }),
		};
		const data = await fetch(`${process.env.REACT_APP_API_URL}/update/carpeta`, requestOptions);
		const dataJson = await data.json();
		console.log(dataJson);
        setEdit(false)
        onUpdate();
    }


	return (
		<>
			<div className={`row d-flex align-items-center roww ${isSelected ? 'active' : ''}`}>
				<div className='col-8'>
					<div className={`table-row`} onClick={() => onSelect(item.id_carpeta)}>
						<i style={{ paddingRight: 10 }} className={`bx bx-folder${isSelected ? '-open' : ''}`}></i>
						{item.titulo_carpeta}
					</div>
				</div>
				<div className='col-2'>
					<div className='icon-edit-folder' onClick={() => setEdit(!edit)}>
						<i className='bx bx-edit-alt'></i>
					</div>
				</div>
				<div className='col-2'>
					<div className='icon-delete-folder'  onClick={onDeleteFolder} >
						<i className='bx bxs-trash'></i>
					</div>
				</div>
			</div>
            {edit &&
			<div className='row d-flex mt-2 mb-4'>
				<div className='col-8'>
                    <input value={textEdit} type="text" className="form-control" id="newname" placeholder="Nuevo nombre" onChange={handleText}/>
				</div>
				<div className='col-2'>
					<div className='icon-edit-folder' onClick={onSendEdit}>
                    <i className='bx bx-check-circle' ></i>
					</div>
				</div>
				<div className='col-2'>
					<div className='icon-delete-folder' onClick={() => setEdit(false)}>
                        <i className='bx bx-x-circle' ></i>
					</div>
				</div>
			</div>
            }
		</>
	);
};

export default FilaProyecto;
