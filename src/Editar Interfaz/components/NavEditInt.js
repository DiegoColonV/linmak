import { Link } from 'react-router-dom';

const NavEditInt = ({ activeTab, onChangeTab }) => {
	return (
		<nav id='navbar' className='nav ms-auto navbar-expand-lg pt-3 nav-tabs tabs text-center'>
			<div className='nav-item '>
				<Link className={activeTab === 1 ? 'nav-link tab active' : 'nav-link tab'} to='/editar/estructura' onClick={onChangeTab}>
					Estructura
				</Link>
			</div>
			<div className='nav-item '>
				<Link className={activeTab === 2 ? 'nav-link tab active' : 'nav-link tab'} to='/editar/elementos' onClick={onChangeTab}>
					Elementos
				</Link>
			</div>
		</nav>
	);
};

export default NavEditInt;
