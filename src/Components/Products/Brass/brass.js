import "../../../main.css";
import { Link } from "react-router-dom";
function BrassProducts() {
    return (
        <>
            {/* <!--//==Page Header Start==//--> */}
        <div className="page-header black-overlay">
            <div className="container breadcrumb-section">
                <div className="row pad-s15">
                    <div className="col-md-12">
                        <h2>Brass</h2>
                        <div className="clear"></div>
                        <div className="breadcrumb-box">
                            <ul className="breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="active">Brass</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--//==Page Header End==//--> */}

        {/* <!--//=========product Page Start=========//--> */}
        <section className="wa-products-main padTB100">
            <div className="container">
                <div className="row">
                    {/* <!--//=========product Right Section Start=========//--> */}
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            {/* <!--product Item--> */}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="wa-products bg-warning">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/brass insert.jpg" alt=""/>
                                        {/* <!-- <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                   
                                                    <li><Link to ="/products/brass/:id" className="quickview-box-btn" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div> --> */}
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2>
                                           <Link to="/products/brass/:id"> BRASS THREADED INSERTS</Link>
                                        </h2>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!--product Item--> */}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/hex nut.jpg" alt=""/>
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                   
                                                    <li><Link to ="/products/brass/:id" className="quickview-box-btn" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2>
                                            <Link to="/products/brass/:id">BRASS HEX NUT</Link>
                                        </h2>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--product Item--> */}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/brass-pipe-fittings.jpg" alt=""/>
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                   
                                                    <li><Link to ="/products/brass/:id" className="quickview-box-btn" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2>
                                            <Link to="/products/brass/:id">BRASS PIPE FITTINGS</Link>
                                        </h2>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--product Item--> */}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/brass-rod.jpg" alt=""/>
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                   
                                                    <li><Link to ="/products/brass/:id" className="quickview-box-btn" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2>
                                            <Link to="/products/brass/:id">BRASS RODS</Link>
                                        </h2>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>



                            <div className="clear"></div>
                        </div>
                    </div>
                    {/* <!--//=========product Right Section End=========//--> */}
                </div>
            </div>
        </section>
        {/* <!--//=========product Page End=========//--> */}
        </>
    )
}

export default BrassProducts