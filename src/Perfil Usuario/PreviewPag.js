/* 
    Clase que muestra el conjunto de páginas en la previsualización
    return: Contenedor con las páginas que se previsualizan
    props:
        * pages: arreglo con las páginas
*/

const PreviewCard = ({item}) => {
	return (
		<div className='preview-card'>
			<div className='preview-title'>{item.name}</div>
			<div className='preview-body'>
				{/* <img src={images[this.props.img]} className='preview-img' /> */}
			</div>
		</div>
	);
};

const PreviewPag = ({ pages }) => {
	const comps = pages.map((pag, i) => {
		return <PreviewCard item={pag} key={i} />;
	});

	return <div className='preview-cont'>{comps}</div>;
};

export default PreviewPag;
