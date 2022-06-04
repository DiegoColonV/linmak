/* 
    Clase que muestra el conjunto de páginas en la previsualización
    return: Contenedor con las páginas que se previsualizan
    props:
        * pages: arreglo con las páginas
*/

const PreviewCard = ({ loading, item, openSaved, onDeleteWork, editSaved, downloadSaved, userData }) => {
	return (
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
			<div className='preview-body'>{/* <img src={images[this.props.img]} className='preview-img' /> */}</div>
		</div>
	);
};

const PreviewPag = (props) => {
	const comps = props.pages.map((pag, i) => {
		return <PreviewCard key={i} item={pag} {...props} />;
	});

	return <div className='preview-cont'>{comps}</div>;
};

export default PreviewPag;
