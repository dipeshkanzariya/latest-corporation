import { Link } from "react-router-dom";
import "../main.css";

function Header() {
    return (
        <>
            {/* Header start */}
            <header id="main-header">
        {/* <!--//==Navbar Start==//--> */}
        <div id="main-menu" className="wa-main-menu">
            <div className="wathemes-menu relative">
                <div className="navbar navbar-default navbar-bg-light" role="navigation">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-2 col-xs-12 navbar-brand" style={{padding: 25}} >
                                <img src="https://latestcorporation.com/assets/img/logol.png" className="img-fluid bg-white" alt=""/>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="navbar-header">
                                    {/* <!-- Button For Responsive toggle --> */}
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        {/* <!-- <span className="sr-only">Toggle navigation</span> 
                                    <span className="icon-bar"></span> 
                                    <span className="icon-bar"></span> 
                                    <span className="icon-bar"></span>-->*/}</button> 
                                    {/* <!-- Logo -->
                                    <!-- <a className="navbar-brand hidden-lg hidden-md hidden-sm" href="index.html">
                                    <img className="site_logo" alt="Site Logo"  src="assets/img/logo-2.png" />
                                    </a> --> */}
                                </div>
                                {/* <!-- Navbar Collapse --> */}
                                <div className="navbar-collapse collapse">
                                    {/* <!-- Right nav Start --> */}
                                    <ul className="nav navbar-nav sm" data-menus-id="16951432453584404">
                                        <li><Link to="">Home</Link></li>
                                        <li>
                                            <Link to="aboutUs">About </Link>
                                        </li>
                                        {/* <li>
                                            <!-- <div className="dropdown">
                                                <button className="dropbtn">Dropdown 
                                                  <i className="fa fa-caret-down"></i>
                                                </button>
                                                <div className="dropdown-content">
                                                  <Link="#">Link 1</Link=>
                                                  <Link="#">Link 2</Link=>
                                                  <Link="#">Link 3</Link=>
                                                </div>
                                              </div>  -->
                                            <Link="kitchenSink.html">Kitchen Sink</Link=>
                                        </li> */}
                                        <li>
                                            <Link to="brass">Brass</Link>
                                        </li>
                                        <li>
                                            <Link to="kitchenSink">Kitchen Sink</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Team</Link>
                                        </li>

                                        <li><Link to="contact">Contact</Link></li>
                                    </ul>
                                    {/* <!-- /.Right nav  End--> */}
                                </div>
                                {/* <!-- /.navbar-collapse --> */}
                            </div>
                            {/* <!-- /.nav Col --> */}
                            
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>
            </div>
        </div>
        {/* <!--//==Navbar End==//--> */}
    </header>
            {/* Header end */}

        </>
    );
}

export default Header