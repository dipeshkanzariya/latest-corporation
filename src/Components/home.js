import "../main.css";
import {Link} from 'react-router-dom';
function Home() {
    return (
        <>
            {/* <!--//==Preloader Start==//--> */}
            {/* <div className="preloader">
        <div className="cssload-container">
            <div className="cssload-loading">
                <div id="object"><i className="fa fa-bath" aria-hidden="true"></i></div>
            </div>
            <h4 className="title">Loading</h4>
        </div>
    </div> */}
            {/* <!--//==Preloader End==//--> */}

            {/* <!--//=======Main Slider=======//--> */}
            <div class="wa_main_bn_wrap sliderd">
        <div id="home1-main-slider" class="owl-carousel owl-theme">
            <div class="item sliderimg">
                <figure>
                    <img src="/Images/all/wa-blog-detail3.jpg" class="hidden-xs hidden-sm " alt="" />
                    <img src="/Images/all/wa-blog-detail3.jpg" class="hidden-lg hidden-md" alt="" />
                    <figcaption>
                        <div class="container">
                            {/* <!-- <h2><span class="">Luxury Faucets Collections</span></h2>
                            <span class="">flat 60% off for first 30 Customer.</span> -->

                            <!-- <a href="collection-grid-sidebar.html" class="theme-button">Shop Now</a> --> */}
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="item sliderimg">
                <figure>
                    <img src="/Images/all/wa-blog-detail2.jpg" class="hidden-xs hidden-sm " alt="" />
                    <img src="/Images/all/wa-blog-detail2.jpg" class="hidden-lg hidden-md" alt="" />
                    <figcaption>
                        <div class="container">
                            {/* <!-- <h2><span>Luxury Faucets Collections</span></h2>
                            <span>flat 60% off for first 30 Customer.</span>
                            <p>Quis est tam dissimile homini. Quia dolori non voluptas.</p>
                            <a href="collection-grid-sidebar.html" class="theme-button">Shop Now</a> --> */}
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="item sliderimg">
                <figure>
                    <img src="https://latestcorporation.com/assets/img/slide/c.jpg" class="hidden-xs hidden-sm"
                        alt="" />
                    <img src="https://latestcorporation.com/assets/img/slide/c.jpg" class="hidden-lg hidden-md"
                        alt="" />
                    <figcaption>
                        <div class="container">
                            {/* <!-- <h2><span>Luxury Faucets Collections</span></h2>
                            <span>flat 60% off for first 30 Customer.</span>
                            <p>Quis est tam dissimile homini. Quia dolori non voluptas.</p>
                            <a href="collection-grid-sidebar.html" class="theme-button">Shop Now</a> --> */}
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
           
            {/* <!--//=======Main Slider End=======//--> */}

            {/* <!--//=============product Start============//--> */}
            <div className="wa-products-main padTB100">
                <div className="container">
                    <div className="row">
                        {/* <!--//==Section Heading Start==//--> */}
                        <div className="col-md-12">
                            <div className="centered-title">
                                <h2>Special product <span className="heading-border"></span></h2>
                                <div className="clear"></div>
                                <em>dNam ac egestas est. Mauris et pulvinar risus, at tincidunt lorem. Maecenas<br />
                                    tristique sit amet odio sit amet aliquet.</em>
                            </div>
                        </div>
                        {/* <!--//==Section Heading End==//--> */}
                    </div>
                    <div className="row" id="MixItUp1">
                        {/* <!--//==product Item==//--> */}
                        <div
                            className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-0 mix">
                            <div className="wa-products">
                                <div className="wa-products-thumbnail wa-item">
                                    <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt="" />
                                    <div className="caption">
                                        <div className="caption-text">
                                            <ul className="wa-products-icon">
                                                
                                                <li><Link className="quickview-box-btn" title="Quick View"><i
                                                    className="fa fa-eye"></i></Link></li>
                                               
                                            </ul>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wa-products-caption">
                                    <h2><a href="product-detail.html">Product Title</a></h2>
                                    <div className="clear"></div>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        {/* <!--//==product Item==//--> */}
                        <div
                            className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-0 mix">
                            <div className="wa-products">
                                <div className="wa-products-thumbnail wa-item">
                                    <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt="" />
                                    <div className="caption">
                                        <div className="caption-text">
                                            <ul className="wa-products-icon">
                                                
                                                <li><Link className="quickview-box-btn" title="Quick View"><i
                                                    className="fa fa-eye"></i></Link></li>
                                               
                                            </ul>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wa-products-caption">
                                    <h2><a href="product-detail.html">Product Title</a></h2>
                                    <div className="clear"></div>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        {/* <!--//==product Item==//--> */}
                        <div
                            className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-0 mix">
                            <div className="wa-products">
                                <div className="wa-products-thumbnail wa-item">
                                    <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt="" />
                                    <div className="caption">
                                        <div className="caption-text">
                                            <ul className="wa-products-icon">
                                                
                                                <li><Link className="quickview-box-btn" title="Quick View"><i
                                                    className="fa fa-eye"></i></Link></li>
                                               
                                            </ul>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wa-products-caption">
                                    <h2><a href="product-detail.html">Product Title</a></h2>
                                    <div className="clear"></div>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        {/* <!--//==product Item==//--> */}
                        <div
                            className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-0 mix ">
                            <div className="wa-products">
                                <div className="wa-products-thumbnail wa-item">
                                    <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt="" />
                                    <div className="caption">
                                        <div className="caption-text">
                                            <ul className="wa-products-icon">
                                                
                                                <li><Link className="quickview-box-btn" title="Quick View"><i
                                                    className="fa fa-eye"></i></Link></li>
                                               
                                            </ul>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wa-products-caption">
                                    <h2><a href="product-detail.html">Product Title</a></h2>
                                    <div className="clear"></div>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        {/* <!--//==product Item==//--> */}
                        <div
                            className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-0 mix">
                            <div className="wa-products">
                                <div className="wa-products-thumbnail wa-item">
                                    <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt="" />
                                    <div className="caption">
                                        <div className="caption-text">
                                            <ul className="wa-products-icon">
                                                
                                                <li><Link className="quickview-box-btn" title="Quick View"><i
                                                    className="fa fa-eye"></i></Link></li>
                                               
                                            </ul>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wa-products-caption">
                                    <h2><a href="product-detail.html">Product Title</a></h2>
                                    <div className="clear"></div>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        {/* <!--//==product Item==//--> */}
                        <div
                            className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-0 mix ">
                            <div className="wa-products">
                                <div className="wa-products-thumbnail wa-item">
                                    <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt="" />
                                    <div className="caption">
                                        <div className="caption-text">
                                            <ul className="wa-products-icon">
                                                
                                                <li><Link className="quickview-box-btn" title="Quick View"><i
                                                    className="fa fa-eye"></i></Link></li>
                                               
                                            </ul>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wa-products-caption">
                                    <h2><a href="product-detail.html">Product Title</a></h2>
                                    <div className="clear"></div>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        {/* <!--//==product Item==//--> */}
                        <div
                            className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-0 mix">
                            <div className="wa-products">
                                <div className="wa-products-thumbnail wa-item">
                                    <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt="" />
                                    <div className="caption">
                                        <div className="caption-text">
                                            <ul className="wa-products-icon">
                                                
                                                <li><Link className="quickview-box-btn" title="Quick View"><i
                                                    className="fa fa-eye"></i></Link></li>
                                               
                                            </ul>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wa-products-caption">
                                    <h2><a href="product-detail.html">Product Title</a></h2>
                                    <div className="clear"></div>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        {/* <!--//==product Item==//--> */}
                        <div
                            className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-0 mix">
                            <div className="wa-products">
                                <div className="wa-products-thumbnail wa-item">
                                    <img src="https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/prime.png" alt="" />
                                    <div className="caption">
                                        <div className="caption-text">
                                            <ul className="wa-products-icon">
                                                
                                                <li><Link className="quickview-box-btn" title="Quick View"><i
                                                    className="fa fa-eye"></i></Link></li>
                                               
                                            </ul>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wa-products-caption">
                                    <h2><a href="product-detail.html">Product Title</a></h2>
                                    <div className="clear"></div>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
            {/* <!--//=============product End============//--> */}

            {/* <!--//=======Banner Section Start=======//--> */}
            <section className="banners-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="latest-banners-item">
                                    <div className="wa-banners">
                                        <div className="wa-banners-thumbnail item our-banners-item wa-item">
                                            <img src="/Images/banners/1.jpg" alt="" />
                                            <div className="caption">
                                                <div className="caption-text">
                                                    <div className="clear"></div>
                                                    <div className="wa-banners-caption text-left">
                                                        <h2>Kitchen Sink </h2>
                                                        <div className="clear"></div>

                                                        <a href="kitchenSink.html" className="theme-button marT10">view products</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="latest-banners-item">
                                    <div className="wa-banners">
                                        <div className="wa-banners-thumbnail item our-banners-item wa-item">
                                            <img src="/Images/banners/2.jpg" alt="" />
                                            <div className="caption">
                                                <div className="caption-text">
                                                    <div className="clear"></div>
                                                    <div className="wa-banners-caption text-right">
                                                        <h2>Brass Collection</h2>
                                                        <div className="clear"></div>
                                                        
                                                        <a href="brass.html" className="theme-button marT10">view product</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--//=======Banner Section End=======//--> */}

            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="col-md-12 marB20">
                            <div className="row">

                                {/* <!--//==Thumbnail==//--> */}

                                {/* <!--//==Blog Content==//--> */}
                                <div className="block-caption padT20">
                                    <h1>Why choose Latest Corporation ?</h1>
                                    {/* <!--//==Meta Detail==//--> */}
                                    <p className="abouPara-text-size">Latest Corporation Kitchen And Brass Products has been
                                        manufacturing and supplying
                                        OEMs with products made from quality materials. We create custom products from many
                                        materials such as Brass, copper and more. Every component that is manufactured or
                                        supplied is produced utilizing specific material required for each customer's
                                        application.</p>
                                </div>
                            </div>
                        </div>
                        <div className="whychooseusimg marT50 marB50 why-chose-img">
                            <img src="https://media.istockphoto.com/id/1291035068/vector/business-people-with-gears-employee-team-create-mechanism-with-cogs-manager-with-megaphone.jpg?s=612x612&w=0&k=20&c=6oFQdq3IVfgiodi0T08HoxzD-YQGjfCEfNPM4HtHU8E="
                                alt="Blog Thumbnail" />
                        </div>
                        <section>
                            <div className="row container  marB100">

                                <div className="col-md-6 icon-box feature-card-container">
                                    <div className="col-sm-2 feature-icon">
                                        <i className="fa-solid fa-receipt" style={{ fontSize: 40 }}></i>
                                    </div>
                                    <div className="col-sm-10 feature-card-content-container">
                                        <h3>PROFESSIONAL WORKERS</h3>
                                        <p>We have professional workers in manufacturing plant.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 icon-box feature-card-container">
                                    <div className="col-sm-2 feature-icon">
                                        <i className="fa-solid fa-cube" style={{ fontSize: 40 }}></i>
                                    </div>
                                    <div className="col-sm-10 feature-card-content-container">
                                        <h3>EXCELLENCE IN DESIGN</h3>
                                        <p>By working with some of India’s leading designers, we understand the latest
                                            trends.
                                            Our design-sense is exemplified by the consistent launching of globally trending
                                            kitchenware items.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 icon-box feature-card-container">
                                    <div className="col-sm-2 feature-icon">
                                        <i className="fa-sharp fa-solid fa-images" style={{ fontSize: 40 }}></i>
                                    </div>
                                    <div className="col-sm-10 feature-card-content-container">
                                        <h3>ON TIME DELIVERY</h3>
                                        <p>We provide on time delivory of the sink as we talked.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 icon-box feature-card-container">
                                    <div className="col-sm-2 feature-icon">
                                        <i className="fa-solid fa-shield" style={{ fontSize: 40 }}></i>
                                    </div>
                                    <div className="col-sm-10 feature-card-content-container">
                                        <h3>LATEST TECHNOLOGY</h3>
                                        <p>We have latest technology installed in our plants.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* <!--//=============Best Seller Section Start============//--> */}
            <div className="wa-products-main padT10 padB5">
                <div className="container">
                    <div className="row">
                        {/* <!--//==Section Heading Start==//--> */}
                        <div className="col-md-12">
                            <div className="centered-title">
                                <h2>Best Seller <span className="heading-border"></span></h2>
                                <div className="clear"></div>
                                <em>dNam ac egestas est. Mauris et pulvinar risus, at tincidunt lorem. Maecenas<br />
                                    tristique sit amet odio sit amet aliquet.</em>
                            </div>
                        </div>
                        {/* <!--//==Section Heading End==//--> */}
                    </div>
                    <div className="row">
                        <div id="best-seller" className="owl-carousel owl-theme carousel-style-1">
                            {/* <!--//==product Item==//--> */}
                            <div className="col-md-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/11.jpg" alt="" />
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                    <li><Link title="Add to wishlist"><i className="fa fa-heart-o"></i></Link>
                                                    </li>
                                                    <li><Link className="quickview-box-btn" title="Quick View"><i
                                                        className="fa fa-eye"></i></Link></li>
                                                    <li><Link title="Add to cart"><i className="fa fa-shopping-basket"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2><a href="product-detail.html">Product Title</a></h2>
                                        <div className="clear"></div>
                                        <ul className="ratings">
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <div className="clear"></div>
                                        <span className="price">
                                            <del>$200</del>
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!--//==product Item==//--> */}
                            <div className="col-md-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/7.jpg" alt="" />
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                    <li><Link title="Add to wishlist"><i className="fa fa-heart-o"></i></Link>
                                                    </li>
                                                    <li><Link className="quickview-box-btn" title="Quick View"><i
                                                        className="fa fa-eye"></i></Link></li>
                                                    <li><Link title="Add to cart"><i className="fa fa-shopping-basket"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2><a href="product-detail.html">Product Title</a></h2>
                                        <div className="clear"></div>
                                        <ul className="ratings">
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <div className="clear"></div>
                                        <span className="price">
                                            <del>$200</del>
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!--//==product Item==//--> */}
                            <div className="col-md-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/10.jpg" alt="" />
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                    <li><Link title="Add to wishlist"><i className="fa fa-heart-o"></i></Link>
                                                    </li>
                                                    <li><Link className="quickview-box-btn" title="Quick View"><i
                                                        className="fa fa-eye"></i></Link></li>
                                                    <li><Link title="Add to cart"><i className="fa fa-shopping-basket"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2><a href="product-detail.html">Product Title</a></h2>
                                        <div className="clear"></div>
                                        <ul className="ratings">
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <div className="clear"></div>
                                        <span className="price">
                                            <del>$200</del>
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!--//==product Item==//--> */}
                            <div className="col-md-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/9.jpg" alt="" />
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                    <li><Link title="Add to wishlist"><i className="fa fa-heart-o"></i></Link>
                                                    </li>
                                                    <li><Link className="quickview-box-btn" title="Quick View"><i
                                                        className="fa fa-eye"></i></Link></li>
                                                    <li><Link title="Add to cart"><i className="fa fa-shopping-basket"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2><a href="product-detail.html">Product Title</a></h2>
                                        <div className="clear"></div>
                                        <ul className="ratings">
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <div className="clear"></div>
                                        <span className="price">
                                            <del>$200</del>
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!--//==product Item==//--> */}
                            <div className="col-md-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/8.jpg" alt="" />
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                    <li><Link title="Add to wishlist"><i className="fa fa-heart-o"></i></Link>
                                                    </li>
                                                    <li><Link className="quickview-box-btn" title="Quick View"><i
                                                        className="fa fa-eye"></i></Link></li>
                                                    <li><Link title="Add to cart"><i className="fa fa-shopping-basket"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2><a href="product-detail.html">Product Title</a></h2>
                                        <div className="clear"></div>
                                        <ul className="ratings">
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <div className="clear"></div>
                                        <span className="price">
                                            <del>$200</del>
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!--//==product Item==//--> */}
                            <div className="col-md-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/6.jpg" alt="" />
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                    <li><Link title="Add to wishlist"><i className="fa fa-heart-o"></i></Link>
                                                    </li>
                                                    <li><Link className="quickview-box-btn" title="Quick View"><i
                                                        className="fa fa-eye"></i></Link></li>
                                                    <li><Link title="Add to cart"><i className="fa fa-shopping-basket"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2><a href="product-detail.html">Product Title</a></h2>
                                        <div className="clear"></div>
                                        <ul className="ratings">
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <div className="clear"></div>
                                        <span className="price">
                                            <del>$200</del>
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!--//==product Item==//--> */}
                            <div className="col-md-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/12.jpg" alt="" />
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                    <li><Link title="Add to wishlist"><i className="fa fa-heart-o"></i></Link>
                                                    </li>
                                                    <li><Link className="quickview-box-btn" title="Quick View"><i
                                                        className="fa fa-eye"></i></Link></li>
                                                    <li><Link title="Add to cart"><i className="fa fa-shopping-basket"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2><a href="product-detail.html">Product Title</a></h2>
                                        <div className="clear"></div>
                                        <ul className="ratings">
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <div className="clear"></div>
                                        <span className="price">
                                            <del>$200</del>
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!--//==product Item==//--> */}
                            <div className="col-md-12">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/13.jpg" alt="" />
                                        <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                    <li><Link title="Add to wishlist"><i className="fa fa-heart-o"></i></Link>
                                                    </li>
                                                    <li><Link className="quickview-box-btn" title="Quick View"><i
                                                        className="fa fa-eye"></i></Link></li>
                                                    <li><Link title="Add to cart"><i className="fa fa-shopping-basket"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2><a href="product-detail.html">Product Title</a></h2>
                                        <div className="clear"></div>
                                        <ul className="ratings">
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star"></i></Link></li>
                                            <li><Link><i className="fa fa-star-half-o"></i></Link></li>
                                        </ul>
                                        <div className="clear"></div>
                                        <span className="price">
                                            <del>$200</del>
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
            {/* <!--//=============Best Seller Section End============//--> */}

            {/* <!--//=========Partners Start=========//--> */}
    <section className="services text-center padB50 padT10 ">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="row">
                        {/* <!--//==Services Item Start==//--> */}
                        <div className="col-md-3 col-sm-3 ">
                            <div className="wa-box-style2">
                                <div className="icon padT10">
                                    <i className="fa-regular fa-face-smile" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <h4>500 +</h4>
                                    <h4>Happy client</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--//==Services Item End==//--> */}
                        {/* <!--//==Services Item Start==//--> */}
                        <div className="col-md-3 col-sm-3">
                            <div className="wa-box-style2">
                                <div className="icon padT10">
                                    <i className="fa-solid fa-list" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <h4>8 +</h4>
                                    <h4>Product</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--//==Services Item End==//--> */}
                        {/* <!--//==Services Item Start==//--> */}
                        <div className="col-md-3 col-sm-3">
                            <div className="wa-box-style2">
                                <div className="icon padT10">
                                    <i className="fa-solid fa-headphones" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <h4>24 / 7</h4>
                                    <h4>Hours of support</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--//==Services Item End==//--> */}
                        {/* <!--//==Services Item Start==//--> */}
                        <div className="col-md-3 col-sm-3">
                            <div className="wa-box-style2">
                                <div className="icon padT10">
                                    <i className="fa-solid fa-users" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <h4>15 +</h4>
                                    <h4>Smart Workers</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--//==Services Item End==//--> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!--//== Service Section Start==//--> */}
    <section id="services" className="services animate__animated animate__fadeInDown padT100" style={{backgroundColor: "white"}}>
        <div className="centered-title">
            <h2>Services <span className="heading-border"></span></h2>
            <div className="clear"></div>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon text-center h1 text-muted"><i className="fa-solid fa-briefcase"></i></div>
                    <div className="text-center">
                        <h4 className="title">Best Quality Products
                        </h4>
                    </div>
                    <div className="text-center">
                        <p className="description">Latest Corporation always provides best quality kitchen sink to our valuable
                            customer.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon text-center h1 text-muted"><i className="fa-solid fa-list-check"></i></div>
                    <div className="text-center">
                        <h4 className="title">International Standard
                        </h4>
                    </div>
                    <div className="text-center">
                        <p className="description">We always maintain international standard to our sink.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon text-center h1 text-muted"><i className="fa-solid fa-chart-simple"></i></div>
                    <div className="text-center">
                        <h4 className="title">Long lasting support
                        </h4>
                    </div>
                    <div className="text-center">
                        <p className="description">We are having 24x7 Long lasting support that help you always in your
                            problems.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon text-center h1 text-muted"><i className="fa-solid fa-binoculars"></i></div>
                    <div className="text-center">
                        <h4 className="title">International market
                        </h4>
                    </div>
                    <div className="text-center">
                        <p className="description"> We launched our product in the domestic as well international market </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon text-center h1 text-muted"><i className="fa-solid fa-lightbulb"></i></div>
                    <div className="text-center">
                        <h4 className="title">Licensed &amp; Insured
                        </h4>
                    </div>
                    <div className="text-center">
                        <p className="description">We have licensed of Our brand and trademark as well.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon text-center h1 text-muted"><i className="fa-solid fa-calendar-week"></i></div>
                    <div className="text-center">
                        <h4 className="title">We Deliver Exellence
                        </h4>
                    </div>
                    <div className="text-center">
                    <p className="description">We follow strict industry norms and promise that every product will give you
                        a satisfactory experience. </p>
                </div>
            </div>
        </div>
        </div>
    </section>
    {/* <!--//=========Service Section End=========//--> */}

    {/* <!--//=========Home Blogs Start=========//--> */}

    <section className="blogs_main padTB100 grey-bg">
                <div className="container">
                    <div className="row">
                        {/* <!--//==Section Heading Start==//--> */}
                        <div className="col-md-12">
                            <div className="centered-title">
                                <h2>WHY CHOOSE US ? <span className="heading-border"></span></h2>
                                <div className="clear"></div>
                                <em>Our globally recognized enterprise works in a well planned and organized
                                    way by following a customer-focused policy, which helps to make our clients happy and
                                    satisfied. All our business plans are made by senior most professional of the company
                                    keeping in view expectations of customers. Also, the products like Kitchen sink ,
                                    Brass, etc...
                                    offered by us with quality assured and made of high quality raw material.</em>
                            </div>
                        </div>
                        {/* <!--//==Section Heading End==//--> */}
                        <div className="col-md-12">
                            <div className="row">
                                <div className="owl-carousel owl-theme carousel-style-1 " id="home-blog-carousel"
                                    style={{opacity: 1,display: "block"}}>
                                    <div className="owl-wrapper-outer">
                                        <div className="owl-wrapper"
                                            style={{width: 1938, left: 0, display: "block", transition: "all 0 ease 0", transform: "translate3d(0, 0, 0)"}}
                                            
                                        >
                                            <div className="owl-item" style={{width: 323}}>
                                                <div className="home-blog-item">
                                                    <div className="col-md-12">
                                                        <div className="wa-theme-design-block">
                                                            <figure className="dark-theme">
                                                                <img src="/Images/all/business-agreement-handshake-hand-gesture_53876-130006.jpg"
                                                                    alt="Thumbnail"/>
                                                                    <span className="hover-style"></span>
                                                            </figure>
                                                            <div className="block-caption">
                                                                <h4>Business deals</h4>
                                                                <p>
                                                                    We do Honest and transparent business deals
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item" style={{width: 323}}>
                                                <div className="home-blog-item">
                                                    <div className="col-md-12">
                                                        <div className="wa-theme-design-block">
                                                            <figure className="dark-theme">
                                                                <img src="/Images/all/discount.jpg" alt="Thumbnail"/>
                                                                    <span className="hover-style"></span>
                                                            </figure>
                                                            <div className="block-caption">
                                                                <h4>Discounts</h4>
                                                                <p>

                                                                    Discounts that we offer to our clients depending upon the
                                                                    order
                                                                    size.
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item" style={{width: 323}}>
                                                <div className="home-blog-item">
                                                    <div className="col-md-12">
                                                        <div className="wa-theme-design-block">
                                                            <figure className="dark-theme">
                                                                <img src="/Images/all/professionals.jpg" alt="Thumbnail"/>
                                                                    <span className="hover-style"></span>
                                                            </figure>
                                                            <div className="block-caption">
                                                                <h4>Professionals
                                                                </h4>
                                                                <p>

                                                                    Unit of highly dexterous professionals that is working for
                                                                    us.
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="owl-controls clickable" style={{display: "none"}}>
                                        <div className="owl-buttons">
                                            <div className="owl-prev">prev</div>
                                            <div className="owl-next">next</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    {/* <!--//=========Home Blogs End=========//--> */}

        </>
    )
}

export default Home