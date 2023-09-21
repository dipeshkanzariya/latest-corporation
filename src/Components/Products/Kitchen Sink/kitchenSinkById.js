import "../../../main.css"
import { Link } from "react-router-dom";
function KitchenSinkById() {
    return (
        <>
            {/* <!--//==Page Header Start==//--> */}
    <div className="page-header black-overlay">
        <div className="container breadcrumb-section">
            <div className="row pad-s15">
                <div className="col-md-12">
                    <h2>PRIME KITCHEN SINK</h2>
                    <div className="clear"></div>
                    <div className="breadcrumb-box">
                        <ul className="breadcrumb">
                            <li>
                                <Link to ="/">Home</Link>
                            </li>
                            <li>
                                <Link to ="/products/kitchensink">kitchen Sink</Link>
                            </li>
                            <li className="active">PRIME KITCHEN SINK</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--//==Page Header End==//--> */}

    {/* <!--//=========product Detail Start=========//--> */}
    <section className="page_single">
        <div className="container">
            <div className="row padTB100">
                <div className="prod-info-section">
                    <div className="clearfix">
                        {/* <!--Thumbnail Column--> */}
                        <div className="carousel-column col-lg-6 col-md-6 col-sm-5 col-xs-12">
                            <div className="wa-product-main-image marB20">
                                <Link to ="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png"
                                    className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img
                                        src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png"
                                        alt=""/> </Link>
                            </div>
                            <div id="wa-slide-image" className="owl-carousel  wa-slide-image carousel-style-1">
                                <Link to ="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png"
                                    className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img
                                        src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png"
                                        alt=""/> </Link>
                                <Link to ="https://www.quazitosink.com/wp-content/uploads/2022/04/prime-dimension-1024x348.png"
                                    className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img
                                        src="https://www.quazitosink.com/wp-content/uploads/2022/04/prime-dimension-1024x348.png"
                                        alt=""/> </Link>
                                {/* <!-- <Link to ="assets/img/product/product-detail-3.jpg" className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img src="assets/img/product/product-detail-3.jpg" alt=""> </Link>
                                    <Link to ="assets/img/product/product-detail-4.jpg" className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img src="assets/img/product/product-detail-4.jpg" alt=""> </Link>
                                    <Link to ="assets/img/product/product-detail-5.jpg" className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img src="assets/img/product/product-detail-5.jpg" alt=""> </Link>   --> */}
                            </div>
                        </div>
                        {/* <!--Content Column--> */}
                        <div className="content-column col-lg-6 col-md-6 col-sm-7 col-xs-12">
                            <div className="outer wow fadeInRight">
                                <div className="title-box">
                                    <div className="inner marB30">
                                        <h2 className="marB10">Prime kitchen Sink</h2>
                                        {/* <!-- <p className="availability in-stock"><strong>Availability:</strong> <span>In
                                                stock</span></p>
                                        <ul className="ratings">
                                            <li><Link to =""><i className="fa fa-star"></i></Link></li>
                                            <li><Link to =""><i className="fa fa-star"></i></Link></li>
                                            <li><Link to =""><i className="fa fa-star"></i></Link></li>
                                            <li><Link to =""><i className="fa fa-star"></i></Link></li>
                                            <li><Link to =""><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <span className="price marB10">
                                            $100
                                            <del>$200</del>
                                            <span className="clear"></span>
                                        </span> -->
                                        <!-- <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies .</p>
                                            <p>It has survived not only five centuries, but also the leap into ele ctronic typesetting, remaining essentially un changed The industry's standard dummy text ever 
                                                since.
                                            </p> --> */}
                                    </div>
                                    <div className="clear"></div>
                                    {/* <!--Options--> */}
                                    <div className="prod-options marB10">

                                        <div className="clearfix">
                                            <div>
                                                <div className="tag-list padL0 marL5 marB5">
                                                    <label><strong>Size : </strong> </label>
                                                    <a className="btnlight" href="#">18X16 inch</a>
                                                </div>
                                                <div className="tag-list padL0 marL5">
                                                    <label className=""><strong>Weight : </strong> </label>

                                                    <a className="btnlight" href="#">9 kg(Approx)</a>
                                                </div>
                                            </div>

                                            <div className="row mt-4 container">
                                                <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12 container">
                                                    <div className="portfolio-description">
                                                        <div className="section-title">
                                                            <h2 className="padTB10"><u>Colour / Shade</u>
                                                            </h2>
                                                        </div>
                                                        <div className="row">

                                                            <div className="col-lg-8 col-md-5 padTB10">
                                                                <div className="row">
                                                                    <h3 className="title text-center"><a aria-current="page"
                                                                            className="active"
                                                                            href="/Kitchen-Sink/ProductKichansink/19">Granite
                                                                            Series</a></h3>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-2"></div>
                                                                    <div className="col-lg-10"><img
                                                                            src="https://www.quazitosink.com/wp-content/uploads/2022/04/granite-color-1024x244.png"
                                                                            className="img-fluid "
                                                                            alt="Latest Corporation img kichan sink colour"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-5 padTB10">
                                                                <div className="row">
                                                                    <h3 className="title text-center"><a aria-current="page"
                                                                            className="active"
                                                                            href="/Kitchen-Sink/ProductKichansink/19">Metallic
                                                                            Series</a></h3>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-2"></div>
                                                                    <div className="col-lg-10"><img
                                                                            src="https://www.quazitosink.com/wp-content/uploads/2022/04/metalic-color-1024x280.png"
                                                                            className="img-fluid "
                                                                            alt="Latest Corporation img kichan sink colour"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-5 col-sm-4 padL5">
                                                {/* <!-- <div className="form-group">
                                                    <label><strong>Color :</strong> </label>
                                                    <div className="clear"></div>
                                                    <select name="sel-color">
                                                        <option>Select Color</option>
                                                        <option>Chrome</option>
                                                        <option>Copper</option>
                                                        <option>Matte Finish</option>
                                                    </select>
                                                </div> --> */}
                                            </div>
                                            <div className="col-md-5 col-sm-4 padL0">
                                                {/* <!-- <div className="form-group">
                                                    <label><strong>Required For :</strong> </label>
                                                    <div className="clear"></div>
                                                    <select name="sel-color">
                                                        <option>Select Requirement</option>
                                                        <option>Kitchen</option>
                                                        <option>Bathroom</option>
                                                        <option>Out Door</option>
                                                    </select>
                                                </div> --> */}
                                            </div>
                                            {/* <div className="form-group col-sm-12 padL0 quantity">
                                                <label><strong>Tags</strong></label>
                                                <div className="tag-list">
                                                    <a className="btnlight" href="#"><i className="fa fa-tags"
                                                            aria-hidden="true"></i> Kitchen</a>

                                                    <a className="btnlight" href=""><i className="fa fa-tags"
                                                            aria-hidden="true"></i> Tap</a>
                                                    <a className="btnlight" href=""><i className="fa fa-tags"
                                                            aria-hidden="true"></i> copper</a>
                                                    <a className="btnlight" href=""><i className="fa fa-tags"
                                                            aria-hidden="true"></i>Crome</a>
                                                    <a className="btnlight" href=""><i className="fa fa-tags"
                                                            aria-hidden="true"></i> Matte Finish</a>
                                                    <a className="btnlight" href=""><i className="fa fa-tags"
                                                            aria-hidden="true"></i> Granite</a>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Add--> */}
                                {/* <!-- <div className="add-options">
                                    <button type="button" className="theme-button">Order Now</button>
                                    <button type="button" className="theme-button"><span
                                            className="fa fa-heart"></span></button>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="row marT4 container">
        <div className="col-lg-8 container">
            
                <div className="row">
                    <div className="portfolio-description">
                        <div className="marL100">
                            <h1>
        
                                Dimensions
                            </h1>
                        </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <h3 className="title text-center"><a aria-current="page" className="active"
                                    href="/Kitchen-Sink/ProductKichansink/19"></a>
                            </h3>
                        </div>
                        <div className="row container">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-11 mb-1"><img className="img-fluid "
                                    alt="Latest Corporation img kitchan sink Dimensions"
                                    src="https://www.quazitosink.com/wp-content/uploads/2022/04/prime-dimension-1024x348.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--//=========product Detail End=========//--> */}
    {/* <!--//==product Description Start==//--> */}
    <section className="page_single">
        <div className="container">
            <div className="row">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Discription <span className="heading-border"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>Nam quis magna in dui fringilla sodales et at ante. Nulla condimentum sed magna ut
                                    Maecenas lacus ante, mattis sed euismod sed, iaculis sed libInteger tortor tellus,
                                    varius ac maximus at, vehicula nec purus. Ut at posuere sapien, ut molestie nisi.
                                    Donec mauris justo, Praesent sed interdum arcu, eget interdum elit. Proin quis
                                    sapien a ex ultrices condimentum eu vel neque. Donec maximus, erat eu mattis
                                    feugiat, nisl tellus vehicula lorem, ut ullamcorper ex risus eu magna. Cum sociis
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <p>Condimentum sed magna ut Maecenas lacus ante, mattis sed euismod sed, iaculis sed
                                    libInteger tortor tellus, varius ac maximus at, vehicula nec purus. Ut at posuere
                                    sapien, ut molestie nisi. Donec mauris justo, Praesent sed interdum arcu, eget
                                    interdum elit. Proin quis sapien a ex ultrices condimentum eu vel neque. Donec
                                    maximus, erat eu mattis feugiat, nisl tellus vehicula lorem, ut ullamcorper ex risus
                                    eu magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Curabitur luctus felis vitae ante gravida, quis imperdiet mauris
                                    convallis. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//==product Description End==//--> */}
        </>
    )
}

export default KitchenSinkById