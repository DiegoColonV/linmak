
/* Esta clase muestra las filas de los proyectos 
    return: un elemento tr junto a un elemento td en el que se muestra el nombre del proyecto
    props:
        * name: nombre del proyecto
        * active: nombre del proyecto activo
        * select: función que marca esta fila como seleccionada
*/

const FilaProyecto = ({item, current_selected, onSelect}) =>{
	const isSelected = item.id === current_selected
    
    return (
		<div className={`table-row ${isSelected ? 'active' : ''}`} onClick={() => onSelect(item.id)}>
			<i style={{paddingRight: 10}} className={`bx bx-folder${isSelected ? '-open' : ''}`}></i>
			{item.nombre}
		</div>
	);
}

export default FilaProyecto;