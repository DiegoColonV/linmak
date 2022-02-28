import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header id='header' className='fixed-top'>
			<div className='container d-flex align-items-center justify-content-between'>
				<div className='logo'>
					<h1>
						<Link to='/'>linmak</Link>
					</h1>
					{/* Uncomment below if you prefer to use an image logo */}
					{/* <a href="index.html"><img src="img/logo.png" alt="" class="img-fluid"></a>*/}
				</div>
				{/* .navbar */}
				<Navbar />
			</div>
		</header>
	);
}

export default Header;
