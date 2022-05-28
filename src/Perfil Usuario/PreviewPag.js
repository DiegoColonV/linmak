/* 
    Clase que muestra el conjunto de páginas en la previsualización
    return: Contenedor con las páginas que se previsualizan
    props:
        * pages: arreglo con las páginas
*/

const PreviewCard = ({item, openSaved}) => {
	return (
		<div className='preview-card' onClick={() => openSaved(item[0], item[3])}>
			<div className='preview-title'><p>{item[1]}</p></div>
			<div className='preview-body'>
				{/* <img src={images[this.props.img]} className='preview-img' /> */}
			</div>
		</div>
	);
};

const PreviewPag = ({ pages, openSaved }) => {
	const comps = pages.map((pag, i) => {
		return <PreviewCard item={pag} key={i} openSaved={openSaved} />;
	});

	return <div className='preview-cont'>{comps}</div>;
};

export default PreviewPag;
