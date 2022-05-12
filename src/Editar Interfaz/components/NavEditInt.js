import { Link } from 'react-router-dom';

const NavEditInt = ({ activeTab, onChangeTab }) => {
	return (
		<nav id='navbar' className='nav ms-auto navbar-expand-lg pt-3 nav-tabs tabs text-center'>
			<div className='nav-item '>
				<span className={activeTab === 1 ? 'nav-link tab active' : 'nav-link tab'} onClick={onChangeTab}>
					Estructura
				</span>
			</div>
			<div className='nav-item '>
				<span className={activeTab === 2 ? 'nav-link tab active' : 'nav-link tab'} onClick={onChangeTab}>
					Elementos
				</span>
			</div>
		</nav>
	);
};

export default NavEditInt;
