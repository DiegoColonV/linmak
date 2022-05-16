import { useState } from 'react';
import FilaProyecto from './FilaProyecto';
import PreviewPag from './PreviewPag';

const dummyCarpetas = [
    {
        "nombre": "Proyecto 1",
        "id": 1, 
        "paginas" : [
            {
                "nombre" : "principal",
                "id":0
            },
            {
                "nombre" : "carrito",
                "id":1
            },
            {
                "nombre" : "contacto",
                "id":2
            }
        ]
    },
    {
        "nombre": "Proyecto 2",
        "id": 2, 
        "paginas": [
            {
                "nombre" : "principal",
                "id":3
            },
            {
                "nombre" : "conocenos",
                "id":4
            }
        ]
    }
]


/*
    Clase que muestra los proyectos en las carpetas almacenadas por el usuario
    return: Contenedor con una tabla y una sección de previsualización
    props: none
    state:
        * selected : nombre de la carpeta seleccionada
        * contActive: (true|false) si el contenedor debe estar o no activo
        * paginas : Arreglo que contiene las paginas correspondientes al proyecto seleccionado
*/

const Carpetas = () => {
	const [idSelected, setIdSelected] = useState(null);
	const [pages, setPages] = useState([]);
    const carpetas = [...dummyCarpetas]

    const onSelect = (id) =>{
        const temp = carpetas.filter((item) => {return item.id === id})
        setIdSelected(id)
        setPages(temp[0].paginas)
    }

	const rows = carpetas.map((carp, i) => {
		return <div key={i} className='row'><FilaProyecto item={carp} current_selected={idSelected} onSelect={onSelect} /></div>;
	});

	return (
		<>
            <div className='row'>
                <div className='col-4'>
                    <div className='row'>
                        <h4>Carpetas:</h4>
                    </div>
                    {rows}
                </div>
                <div className='col-8'>
                    <PreviewPag pages={pages} />
                </div>
            </div>				
		</>
	);
};

export default Carpetas;
