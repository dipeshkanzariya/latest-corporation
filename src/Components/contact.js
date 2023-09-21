import { lazy } from "react";
import "../main.css";

function ContactUs() {
    return (
        <>
            {/* <!--//==Page Header Start==//-->	   */}
        <div class="page-header black-overlay">
            <div class="container breadcrumb-section">
                <div class="row pad-s15">
                    <div class="col-md-12">
                        <h2>Contact us</h2>
                        <div class="clear"></div>
                        <div class="breadcrumb-box">
                            <ul class="breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li class="active">Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--//==Page Header End==//--> */}

        {/* <!--//==Contact Page Start==//--> */}
        <section class="page_single">
            {/* <!--//==Contact Form Section Start==//--> */}
            <div class="container">
                <div class="row contact-bottom padTB100">
                    {/* <!--//==Section Heading Start==//--> */}
                    <div class="col-md-12">
                        <div class="centered-title">
                            <h2>Get In Touch <span class="heading-border"></span></h2>
                            <div class="clear"></div>
                           
                            <div class="clear"></div>
                        </div>
                    </div>
                    {/* <!--//==Section Heading End==//--> */}
                    <section class="services text-center padB100">
                        <div class="container ">
                           <div class="row">
                                <div class="col-md-12 col-sm-12  cards">
                                    
                                        {/* <!--//==Services Item Start==//--> */}
                                        <div class="col-md-3 col-sm-3" >
                                            <div class="wa-box-style2">
                                                <div class="icon">	
                                                    <i class="fa fa-map-marker fa-5x" aria-hidden="true"></i>

                                                </div>
                                                <div class="text">
                                                    <h4>Address</h4>
                                                    <h5>Paswanath Plaza -2 ,opp Kuber Cinema,8-A National Highway Morbi ,363642x`</h5>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!--//==Services Item End==//--> */}
                                        {/* <!--//==Services Item Start==//--> */}
                                        <div class="col-md-3 col-sm-3">
                                            <div class="wa-box-style2">
                                                <div class="icon">	
                                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                                </div>
                                                <div class="text">
                                                    <h4>Phone</h4>
                                                    <h5>+91 7574896950
                                                    </h5>

                                                    <h5>+91 8160911847</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--//==Services Item End==//--> */}
                                        {/* <!--//==Services Item Start==//--> */}
                                        <div class="col-md-3 col-sm-3">
                                            <div class="wa-box-style2">
                                                <div class="icon">	
                                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                                </div>
                                                <div class="text">
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
                    <div class="col-md-12 left-box">
                        <form id="fashion_contactform" method="post">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Your Name<span class="required red-text">*</span></label>
                                        <input type="text" name="name"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Your Email<span class="required red-text">*</span></label>
                                        <input type="email" name="email" id="exampleInputEmail1"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Your Number</label>
                                        <input type="text" name="phone" id="exampleInputPhone"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="web" id="exampleInputWebsite"/>
                                    </div>
                                </div>
                                <div class="clear"></div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Your Message<span class="required red-text">*</span></label>
                                        <textarea name="Message" class="textarea-message" rows="10"></textarea>	
                                    </div>
                                </div>
                                <div class="col-sm-12 form-group">
                                    <input type="submit" class="theme-button" value="Send Message"/>
                                    <div class="fashion_infotext"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <!--//==Form Area End==//--> */}
                </div>
            </div>
            {/* <!--//==Contact Form Section End==//--> */}



            {/* <!--//==Contact Map Section Start==//--> */}
            <div class="col-md-12 col-sm-12">
                <div class="row">
                    <div class="map-area">
                        {/* <!-- <div id="gmap_canvas" class="maps"></div> --> */}
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