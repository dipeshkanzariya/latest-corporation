import "../../../main.css";
import { Link } from "react-router-dom";

function KitchenSink() {
    return (
        <>
           {/* <div className="preloader">
            <div className="cssload-container">
                <div className="cssload-loading">
                    <div id="object"><i className="fa fa-bath" aria-hidden="true"></i></div>
                </div>
                <h4 className="title">Loading</h4>
            </div>
        </div>  */}

{/* <!--//==Page Header Start==//--> */}
        <div className="page-header black-overlay">
            <div className="container breadcrumb-section">
                <div className="row pad-s15">
                    <div className="col-md-12">
                        <h2>Kitchen Sink</h2>
                        <div className="clear"></div>
                        <div className="breadcrumb-box">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="active">Kitchen Sink</li>
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
                    {/* <!--//=========Product Sorting Section Start=========//-->
                    <!-- <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="product-sorting">
                        
                            <div className="col-md-6 col-sm-5 col-xs-12">
                                <div className="row">
                                    <form>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <select name="orderby" className="orderby">
                                                <option value="menu_order" selected="selected">Default sorting</option>
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="rating">Sort by average rating</option>
                                                <option value="date">Sort by newness</option>
                                                <option value="price">Sort by price: low to high</option>
                                                <option value="price-desc">Sort by price: high to low</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <select name="countby" className="countby">
                                                <option value="12">12</option>
                                                <option value="15">15</option>
                                                <option value="18">18</option>
                                                <option value="21">21</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <p className="product-result-count">Showing all 12 results of product sort</p>
                            </div>
                        </div>
                    </div> -->
                    <!--//=========Product Sorting Section End=========//-->				 */}
                    {/* <!--//=========product list Section Start=========//--> */}
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row product-list">
                            {/* <!--product Item--> */}
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="wa-products">
                                    <div className="col-lg-5 col-md-5 col-sm-3 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-thumbnail wa-item sinkimg">
                                                <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/38x18-black.png" alt=""/>
                                                <div className="caption"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-9 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-caption wa-list-caption text-left">
                                                <h2>
                                                    <Link to="/products/kitchensink/:id">Platinium </Link>
                                                </h2>
                                                <div className="clear"></div>
                                                {/* <!-- <ul className="ratings">
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star-half-o"></i></Link></li>
                                                </ul> --> */}
                                                <div className="clear"></div>
                                                {/* <!-- <span className="price">
                                                <del>$200</del>
                                                $100
                                                </span>	 --> */}
                                                <p>
                                                   
                                                </p>
                                                <ul className="wa-products-icon">
                                                    {/* <!-- <li><Link to="" title="Add to wishlist"><i className="fa fa-heart-o"></i></Link></li> --> */}
                                                    <li><Link to="/products/kitchensink/:id" className="" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    {/* <!-- <li><Link to="" title="Add to cart"><i className="fa fa-shopping-basket"></i></Link></li> --> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="wa-products">
                                    <div className="col-lg-5 col-md-5 col-sm-3 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-thumbnail wa-item">
                                                <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/48x20.png" alt=""/>
                                                <div className="caption"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-9 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-caption wa-list-caption text-left">
                                                <h2>
                                                    <Link to="/products/kitchensink/:id">Marvel</Link>
                                                </h2>
                                                <div className="clear"></div>
                                                {/* <!-- <ul className="ratings">
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star-half-o"></i></Link></li>
                                                </ul> --> */}
                                                <div className="clear"></div>
                                                {/* <!-- <span className="price">
                                                <del>$200</del>
                                                $100
                                                </span>	 --> */}
                                                <p>
                                                   
                                                </p>
                                                <ul className="wa-products-icon">
                                                    {/* <!-- <li><Link to="" title="Add to wishlist"><i className="fa fa-heart-o"></i></Link></li> --> */}
                                                    <li><Link to="/products/kitchensink/:id" className="" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    {/* <!-- <li><Link to="" title="Add to cart"><i className="fa fa-shopping-basket"></i></Link></li> --> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="wa-products">
                                    <div className="col-lg-5 col-md-5 col-sm-3 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-thumbnail wa-item">
                                                <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt=""/>
                                                <div className="caption"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-9 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-caption wa-list-caption text-left">
                                                <h2>
                                                    <Link to="/products/kitchensink/:id">Prime</Link>
                                                </h2>
                                                <div className="clear"></div>
                                                {/* <!-- <ul className="ratings">
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star-half-o"></i></Link></li>
                                                </ul> --> */}
                                                <div className="clear"></div>
                                                {/* <!-- <span className="price">
                                                <del>$200</del>
                                                $100
                                                </span>	 --> */}
                                                <p>
                                                   
                                                </p>
                                                <ul className="wa-products-icon">
                                                    {/* <!-- <li><Link to="" title="Add to wishlist"><i className="fa fa-heart-o"></i></Link></li> --> */}
                                                    <li><Link to="/products/kitchensink/:id" className="" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    {/* <!-- <li><Link to="" title="Add to cart"><i className="fa fa-shopping-basket"></i></Link></li> --> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="wa-products">
                                    <div className="col-lg-5 col-md-5 col-sm-3 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-thumbnail wa-item">
                                                <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/Crystel.png" alt=""/>
                                                <div className="caption"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-9 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-caption wa-list-caption text-left">
                                                <h2>
                                                    <Link to="/products/kitchensink/:id">Crystel</Link>
                                                </h2>
                                                <div className="clear"></div>
                                                {/* <!-- <ul className="ratings">
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star-half-o"></i></Link></li>
                                                </ul> --> */}
                                                <div className="clear"></div>
                                                {/* <!-- <span className="price">
                                                <del>$200</del>
                                                $100
                                                </span>	 --> */}
                                                <p>
                                                   
                                                </p>
                                                <ul className="wa-products-icon">
                                                    {/* <!-- <li><Link to="" title="Add to wishlist"><i className="fa fa-heart-o"></i></Link></li> --> */}
                                                    <li><Link to="/products/kitchensink/:id" className="" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    {/* <!-- <li><Link to="" title="Add to cart"><i className="fa fa-shopping-basket"></i></Link></li> --> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="wa-products">
                                    <div className="col-lg-5 col-md-5 col-sm-3 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-thumbnail wa-item">
                                                <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/dovel.png" alt=""/>
                                                <div className="caption"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-9 col-xs-12">
                                        <div className="row">
                                            <div className="wa-products-caption wa-list-caption text-left">
                                                <h2>
                                                    <Link to="/products/kitchensink/:id">Dovel</Link>
                                                </h2>
                                                <div className="clear"></div>
                                                {/* <!-- <ul className="ratings">
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star"></i></Link></li>
                                                    <li><Link to=""><i className="fa fa-star-half-o"></i></Link></li>
                                                </ul> --> */}
                                                <div className="clear"></div>
                                                {/* <!-- <span className="price">
                                                <del>$200</del>
                                                $100
                                                </span> -->	 */}
                                                <p> 
                                                    Description
                                                </p>
                                                <ul className="wa-products-icon">
                                                    {/* <!-- <li><Link to="" title="Add to wishlist"><i className="fa fa-heart-o"></i></Link></li> --> */}
                                                    <li><Link to="/products/kitchensink/:id" className="" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    {/* <!-- <li><Link to="" title="Add to cart"><i className="fa fa-shopping-basket"></i></Link></li> --> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                {/* <!--//==Pagination Start==//--> */}
                                {/* <!-- <div className="styled-pagination padB30 text-center">
                                    <ul>
                                        <li><a className="prev" href="#"><i className="fa fa-angle-left"></i></a></li>
                                        <li><Link to="#">1</Link></li>
                                        <li><Link to="#" className="active">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#">4</Link></li>
                                        <li><a className="next" href="#"><i className="fa fa-angle-right"></i></a></li>
                                    </ul>
                                </div> --> */}
                                {/* <!--//==Pagination End==//--> */}
                            </div>
                        </div>
                    </div>
                    {/* <!--//=========product list Section End=========//--> */}
                </div>
            </div>
        </section>
        {/* <!--//=========product Page End=========//--> */}
        </>
    )
}

export default KitchenSink