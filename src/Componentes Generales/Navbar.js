
function Navbar (){
    return(
        <nav id="navbar" className="navbar">
            <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#features">App Features</a></li>
            <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
            <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
            <li><a className="nav-link scrollto" href="#faq">F.A.Q</a></li>
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
                </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#features">Get Started</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
        </nav>
    );
}

export default Navbar;