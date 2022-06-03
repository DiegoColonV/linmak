import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate()

	const onClickLogo = ()=>{
		navigate('/')
	}

	return (
		<header id='header' className='fixed-top'>
			<div className='container d-flex align-items-center justify-content-between'>
				<div className='logo' onClick={onClickLogo}>
					{/* <h1>
						<Link to='/'>linmak</Link>
					</h1> */}
					{/* Uncomment below if you prefer to use an image logo */}
					<img src="/img/logo.png" alt="" className="img-fluid"/> 
					{/* <h1 style={{marginLeft: 10, color: '#8080ff', fontWeight: 600}} className='d-inline'>linmak</h1> */}
				</div>
				{/* .navbar */}
				<Navbar />
			</div>
		</header>
	);
}

export default Header;
