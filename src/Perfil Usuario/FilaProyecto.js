
/* Esta clase muestra las filas de los proyectos 
    return: un elemento tr junto a un elemento td en el que se muestra el nombre del proyecto
    props:
        * name: nombre del proyecto
        * active: nombre del proyecto activo
        * select: función que marca esta fila como seleccionada
*/

const FilaProyecto = ({item, current_selected, onSelect, onUpdate}) =>{
	const isSelected = item.id_carpeta === current_selected

    const onDeleteFolder = async() =>{
        const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
			body: JSON.stringify({ id_folder: item.id_carpeta }),
		};
		const data = await fetch('http://25.59.209.228:5000/delete/carpeta', requestOptions);
		const dataJson = await data.json();
        console.log(dataJson)
        onUpdate()
    }
    
    return (
			<div className='row d-flex align-items-center'>
				<div className='col-10'>
					<div className={`table-row ${isSelected ? 'active' : ''}`} onClick={() => onSelect(item.id_carpeta)}>
						<i style={{ paddingRight: 10 }} className={`bx bx-folder${isSelected ? '-open' : ''}`}></i>
						{item.titulo_carpeta}
					</div> 
				</div>
                <div className='col-2'>
                    <div className="icon-delete-folder" onClick={onDeleteFolder}>
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
			</div>
		);
}

export default FilaProyecto;