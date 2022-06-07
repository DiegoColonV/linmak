const PreviewPag = ({pages, onSelect}) => {

	const comps = pages.map((pag, i) => {
		return (
			<div className='col-6' key={i}>
				<div className='preview-card' onClick={() => onSelect(pag.id_trabajo)}>
					<div className='preview-title row'>
						<p className='m-0'>{pag.titulo_trabajo}</p>
					</div>
					<div className='preview-body row'>
						<img className='preview-img' src={`/img/previews/Compressed/${pag.nombre_plantilla.toLowerCase()}.png`}/>
					</div>
				</div>
			</div>
		);
	});

	return <div className='row ms-4'>{comps}</div>;
};

export default PreviewPag;
