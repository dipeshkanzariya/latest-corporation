import { lazy } from "react";
import "../main.css";
import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <>
            {/* <!--//==Page Header Start==//-->	   */}
        <div className="page-header black-overlay">
            <div className="container breadcrumb-section">
                <div className="row pad-s15">
                    <div className="col-md-12">
                        <h2>Contact us</h2>
                        <div className="clear"></div>
                        <div className="breadcrumb-box">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="active">Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--//==Page Header End==//--> */}

        {/* <!--//==Contact Page Start==//--> */}
        <section className="page_single">
            {/* <!--//==Contact Form Section Start==//--> */}
            <div className="container">
                <div className="row contact-bottom padTB100">
                    {/* <!--//==Section Heading Start==//--> */}
                    <div className="col-md-12">
                        <div className="centered-title">
                            <h2>Get In Touch <span className="heading-border"></span></h2>
                            <div className="clear"></div>
                           
                            <div className="clear"></div>
                        </div>
                    </div>
                    {/* <!--//==Section Heading End==//--> */}
                    <section className="services text-center padB100">
                        <div className="container ">
                           <div className="row">
                                <div className="col-md-12 col-sm-12  cards">
                                    
                                        {/* <!--//==Services Item Start==//--> */}
                                        <div className="col-md-3 col-sm-3" >
                                            <div className="wa-box-style2">
                                                <div className="icon">	
                                                    <i className="fa fa-map-marker fa-5x" aria-hidden="true"></i>

                                                </div>
                                                <div className="text">
                                                    <h4>Address</h4>
                                                    <h5>Paswanath Plaza -2 ,opp Kuber Cinema,8-A National Highway Morbi ,363642x`</h5>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!--//==Services Item End==//--> */}
                                        {/* <!--//==Services Item Start==//--> */}
                                        <div className="col-md-3 col-sm-3">
                                            <div className="wa-box-style2">
                                                <div className="icon">	
                                                    <i className="fa fa-mobile" aria-hidden="true"></i>
                                                </div>
                                                <div className="text">
                                                    <h4>Phone</h4>
                                                    <h5>+91 7574896950
                                                    </h5>

                                                    <h5>+91 8160911847</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--//==Services Item End==//--> */}
                                        {/* <!--//==Services Item Start==//--> */}
                                        <div className="col-md-3 col-sm-3">
                                            <div className="wa-box-style2">
                                                <div className="icon">	
                                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                </div>
                                                <div className="text">
                                                    <h4>Mail</h4>
                                                    <h5>info@latestcorporation.com</h5>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
                           </div>
                        </div>
                    </section>
                    {/* <!--//==Form Area Start==//--> */}
                    <div className="col-md-12 left-box">
                        <form id="fashion_contactform" method="post">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Your Name<span className="required red-text">*</span></label>
                                        <input type="text" name="name"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Your Email<span className="required red-text">*</span></label>
                                        <input type="email" name="email" id="exampleInputEmail1"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Your Number</label>
                                        <input type="text" name="phone" id="exampleInputPhone"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="web" id="exampleInputWebsite"/>
                                    </div>
                                </div>
                                <div className="clear"></div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Your Message<span className="required red-text">*</span></label>
                                        <textarea name="Message" className="textarea-message" rows="10"></textarea>	
                                    </div>
                                </div>
                                <div className="col-sm-12 form-group">
                                    <input type="submit" className="theme-button" value="Send Message"/>
                                    <div className="fashion_infotext"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <!--//==Form Area End==//--> */}
                </div>
            </div>
            {/* <!--//==Contact Form Section End==//--> */}



            {/* <!--//==Contact Map Section Start==//--> */}
            <div className="col-md-12 col-sm-12">
                <div className="row">
                    <div className="map-area">
                        {/* <!-- <div id="gmap_canvas" className="maps"></div> --> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1764.8287872200276!2d70.91429712601423!3d22.758102585670223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693585449921!5m2!1sen!2sin" width="600" height="450" style={{border:0, loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                    {/* <!-- </div> --> */}
                </div>
            </div>
            </div>
            {/* <!--//==Contact Map Section End==//-->			 */}
        </section> 
        {/* <!--//==Contact Page End==//--> */}
        </>
    )
}

export default ContactUs