function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container d-flex">
                    <div className="col-sm-6" style={{width : 50+"%"}}>
                        <img src="https://latestcorporation.com/assets/img/logol.png" style={{height : 100+"%"}} className="img-fluid" alt="..." />
                    </div>
                    <div className="text-end" style={{width : 50+"%", border: "none"}}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon h6"></span>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse col-sm-6" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-5 fw-bold">
                            <a className="nav-link mx-3" aria-current="page" href="...">Home</a>
                            <a className="nav-link mx-3" href="...">About Us</a>
                            <a className="nav-link mx-3" href="...">Pricing</a>
                            <a className="nav-link mx-3" href="...">Disabled</a>
                        </div>
                    </div>
                    {/* <div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div> */}
                </div>
            </nav>
        </>
    );
}

export default Header