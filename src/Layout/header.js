import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            {/* Header Start */}
            <header>
                {/* Navbar start */}
                <nav class="navbar navbar-expand-lg bg-dark p-4">
                    <div class="container-fluid">
                        <div style={{ width: 50 + "%" }}>
                            <a class="navbar-brand " href="..">
                                <img src="https://latestcorporation.com/assets/img/logol.png" alt="Logo" width="250" height="80" class="img-fluid bg-white" />
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active text-light fw-bold fs-6" href="..">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light fw-bold fs-6" href="..">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light fw-bold fs-6" href="..">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light fw-bold fs-6">Disabled</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto flex-row justify-content-center text-light">
                                <li><i class="fa-brands fa-facebook mx-2"></i></li>
                                <li><i class="fa-brands fa-whatsapp mx-2"></i></li>
                                <li><i class="fa-brands fa-instagram mx-2"></i></li>
                            </ul>
                        </div>
                        <div style={{ width: 50 + "%" }} className="text-end">
                            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
                {/* Navbar end */}
            </header>
            {/* Header end */}
            {/* <div className="header-div fixed-top">

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
            </div> */}

        </>
    );
}

export default Header