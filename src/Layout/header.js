import { Link } from "react-router-dom";
import "../main.css";

function Header() {
    return (
        <>
            {/* Header start */}
            <header id="main-header">
        {/* <!--//==Navbar Start==//--> */}
        <div id="main-menu" class="wa-main-menu">
            <div class="wathemes-menu relative">
                <div class="navbar navbar-default navbar-bg-light" role="navigation">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3 col-sm-2 col-xs-12 navbar-brand" style={{padding: 25}} >
                                <img src="https://latestcorporation.com/assets/img/logol.png" class="img-fluid bg-white"/>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <div class="navbar-header">
                                    {/* <!-- Button For Responsive toggle --> */}
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        {/* <!-- <span class="sr-only">Toggle navigation</span> 
                                    <span class="icon-bar"></span> 
                                    <span class="icon-bar"></span> 
                                    <span class="icon-bar"></span>-->*/}</button> 
                                    {/* <!-- Logo -->
                                    <!-- <a class="navbar-brand hidden-lg hidden-md hidden-sm" href="index.html">
                                    <img class="site_logo" alt="Site Logo"  src="assets/img/logo-2.png" />
                                    </a> --> */}
                                </div>
                                {/* <!-- Navbar Collapse --> */}
                                <div class="navbar-collapse collapse">
                                    {/* <!-- Right nav Start --> */}
                                    <ul class="nav navbar-nav sm" data-menus-id="16951432453584404">
                                        <li><a href="index.html">Home</a></li>
                                        <li>
                                            <a href="#">About </a>
                                        </li>
                                        {/* <li>
                                            <!-- <div class="dropdown">
                                                <button class="dropbtn">Dropdown 
                                                  <i class="fa fa-caret-down"></i>
                                                </button>
                                                <div class="dropdown-content">
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