import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header-div fixed-top">

                <nav className="navbar navbar-expand-lg bg-light navbar-light header " >
                    <div className="container">
                        <div className=""><Link className="navbar-brand" to="/"><img className="logo img-fluid" src="https://latestcorporation.com/assets/img/logol.png" width="120" alt="" /></Link></div>
                        <div className="">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutUs">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/products/brass">Brass</Link></li>
                                        <li><Link className="dropdown-item" to="/products/kitchensink">Kitchen Sink</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>

        </>
    );
}

export default Header