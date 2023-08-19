import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light navbar-light header" >
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><img className="logo" src="https://latestcorporation.com/assets/img/logol.png" alt=""/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/aboutUs">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/products/brass">Brass Products</Link></li>
                                    <li><Link class="dropdown-item" to="/products/kitchensink">Kitchen Sink </Link></li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header