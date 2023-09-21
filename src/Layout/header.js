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
                                <img src="https://latestcorporation.com/assets/img/logol.png" className="img-fluid bg-white"/>
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
                                        <li><a href="index.html">Home</a></li>
                                        <li>
                                            <a href="#">About </a>
                                        </li>
                                        {/* <li>
                                            <!-- <div className="dropdown">
                                                <button className="dropbtn">Dropdown 
                                                  <i className="fa fa-caret-down"></i>
                                                </button>
                                                <div className="dropdown-content">
                                                  <a href="#">Link 1</a>
                                                  <a href="#">Link 2</a>
                                                  <a href="#">Link 3</a>
                                                </div>
                                              </div>  -->
                                            <a href="kitchenSink.html">Kitchen Sink</a>
                                        </li> */}
                                        <li>
                                            <a href="brass.html">Brass</a>
                                        </li>
                                        <li>
                                            <a href="#">Team</a>
                                        </li>

                                        <li><a href="contactUs.html">Contact</a></li>
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