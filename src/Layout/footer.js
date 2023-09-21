import "../main.css"
import { Link } from "react-router-dom";
function Footer() {
    <>
        {/* <!--//=========Footer Start=========//--> */}
        <footer id="main-footer" className="dark-footer footer-style1">
            {/* <!--Upper Footer Block--> */}
            <div className="upper-footer wv_footer">
                <div className="container">
                    <div className="row pad-s15">
                        {/* <!--Widget Block--> */}
                        <div className="col-md-3 col-sm-6">
                            <div className="widget">
                                <h4>Information</h4>
                                <ul>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Products</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Advanced
                                        Search</Link>
                                    </li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Site Map</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> FAQ</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Location</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Terms &amp;
                                        Condition</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Privacy
                                        Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Widget Block--> */}
                        <div className="col-md-3 col-sm-6">
                            <div className="widget">
                                <h4>Category</h4>
                                <ul>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Products</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Advanced
                                        Search</Link>
                                    </li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Site Map</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> FAQ</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Location</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Terms &amp;
                                        Condition</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Privacy
                                        Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Widget Block--> */}
                        <div className="col-md-3 col-sm-6">
                            <div className="widget">
                                <h4>Account</h4>
                                <ul>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Products</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Advanced
                                        Search</Link>
                                    </li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Site Map</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> FAQ</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Location</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Terms &amp;
                                        Condition</Link></li>
                                    <li><Link><i className="fa fa-angle-double-right wv_circle"></i> Privacy
                                        Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Widget Block--> */}
                        <div className="col-md-3 col-sm-6">
                            <div className="widget contact-widget">
                                <h4>Contact</h4>
                                <p>
                                    At vero eos et accusamus et iusto lits agnissmos ducimus.
                                </p>
                                <p><span className="rounded-icon"><i className="fa fa-map-marker"></i></span>PO Box 16122
                                    Collins
                                    Street <br />
                                    West Victoria 8007 Australia
                                </p>
                                <p><span className="rounded-icon"><i className="fa fa-phone"></i></span>+123 456 7890 <br />
                                    +123 456 7890
                                </p>
                                <p><span className="rounded-icon"><i className="fa fa-envelope-o"></i></span>+123 456 7890<br />
                                    +123 456 7890
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Copyright Footer Block--> */}
            <div className="bottom-footer">
                <div className="container">
                    <div className="row pad-s15">
                        <div className="col-md-12 copy-right text-center">
                            <p>Copyright &copy; 2017 Aashi Fauctes, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!--//=========Footer End=========//--> */}
    </>
}

export default Footer