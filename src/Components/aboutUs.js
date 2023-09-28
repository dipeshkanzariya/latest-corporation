import "../main.css";
import { Link } from "react-router-dom";
function AboutUs() {
    return (
        <>
            {/* <!--//==Page Header Start==//--> */}
            <div className="page-header black-overlay">
                <div className="container breadcrumb-section">
                    <div className="row pad-s15">
                        <div className="col-md-12">
                            <h2>About</h2>
                            <div className="clear"></div>
                            <div className="breadcrumb-box">
                                <ul className="breadcrumb">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="active">About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--//==Page Header End==//--> */}

            <section className="page_single blogs_main blogs_details padTB50">
                <div className="container">
                    <div className="row">
                        {/* <!--//==Blog Detail Section Start==//--> */}
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="col-md-12 marB20">
                                <div className="row">
                                    {/* <!--//==Thumbnail==//--> */}
                                    <figure className="dark-theme">
                                        <img src="/Images/all/wa-blog-3.jpg" alt="Blog Thumbnail" />
                                    </figure>
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

                            <section>
                                <div className="row container">
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


                            <section className="services text-center padB100 padT100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="row">
                                                {/* <!--//==Services Item Start==//--> */}
                                                <div className="col-md-3 col-sm-3">
                                                    <div className="wa-box-style2">
                                                        <div className="icon">
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
                                                        <div className="icon">
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
                                                        <div className="icon">
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
                                                        <div className="icon">
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
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services animate__animated animate__fadeInDown" style={{ backgroundColor: "white" }}>
                <div className="centered-title">
                    <h2>Services <span className="heading-border"></span></h2>
                    <div className="clear"></div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box feature-card-container">
                            <div className="icon text-center h1 text-muted"><i className="fa-solid fa-briefcase"></i></div>
                            <div className="text-center">
                                <h4 className="title">Best Quality Products
                                </h4>
                            </div>
                            <div className="text-center">
                                <p className="description">Latest Corporation always provides best quality kitchen sink to our
                                    valuable
                                    customer.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box feature-card-container">
                            <div className="icon text-center h1 text-muted"><i className="fa-solid fa-list-check"></i></div>
                            <div className="text-center">
                                <h4 className="title">International Standard
                                </h4>
                            </div>
                            <div className="text-center">
                                <p className="description">We always maintain international standard to our sink.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box feature-card-container">
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
                        <div className="col-lg-4 col-md-6 icon-box feature-card-container">
                            <div className="icon text-center h1 text-muted"><i className="fa-solid fa-binoculars"></i></div>
                            <div className="text-center">
                                <h4 className="title">International market
                                </h4>
                            </div>
                            <div className="text-center">
                                <p className="description"> We launched our product in the domestic as well international market
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box feature-card-container">
                            <div className="icon text-center h1 text-muted"><i className="fa-solid fa-lightbulb"></i></div>
                            <div className="text-center">
                                <h4 className="title">Licensed &amp; Insured
                                </h4>
                            </div>
                            <div className="text-center">
                                <p className="description">We have licensed of Our brand and trademark as well.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box feature-card-container">
                            <div className="icon text-center h1 text-muted"><i className="fa-solid fa-calendar-week"></i></div>
                            <div className="text-center">
                                <h4 className="title">We Deliver Exellence
                                </h4>
                            </div>
                            <div className="text-center">
                                <p className="description">We follow strict industry norms and promise that every product will give
                                    you
                                    a satisfactory experience. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

        </>
    )
}

export default AboutUs