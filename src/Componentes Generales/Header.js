import Navbar from "./Navbar";
function Header() {
    return(
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1><a href="index.html">linmak</a></h1>
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