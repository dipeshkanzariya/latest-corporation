import "../../../main.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
function KitchenSinkById() {

    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    // setLoding(false);
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {

        fetch(
            "https://uniqueadmin.latestcorporation.com/admin_latest_corporation/api/getperticulerkitchensink.php?apikey=9537290206&product_id=" + param.id, { method: "GET" }, setisLoading(true)
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setisLoading(false);
            });
    }, []);

    const customerdetails = data.data?.map((cus) => {
        return (
            <>
                <section className="page_single">
                    <div className="container">
                        <div className="row padTB100">
                            <div className="prod-info-section">
                                <div className="clearfix">
                                    {/* <!--Thumbnail Column--> */}
                                    <div className="carousel-column col-lg-6 col-md-6 col-sm-5 col-xs-12">
                                        <div className="wa-product-main-image marB20">
                                            <Link to={"https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/" + cus.kproduct_image}
                                                className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img
                                                    src={"https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/" + cus.kproduct_image}
                                                    alt="" /> </Link>
                                        </div>
                                        <div id="wa-slide-image" className="owl-carousel  wa-slide-image carousel-style-1">
                                            <Link to={"https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/" + cus.kproduct_image}
                                                className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img
                                                    src={"https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/" + cus.kproduct_image}
                                                    alt="" /> </Link>
                                            <Link to={cus.kproduct_dimensions}
                                                className="fancybox" data-fancybox-group="group" title="Chrome Finish faucet"> <img
                                                    src={cus.kproduct_dimensions}
                                                    alt="" /> </Link>

                                        </div>
                                    </div>
                                    {/* <!--Content Column--> */}
                                    <div className="content-column col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                        <div className="outer wow fadeInRight">
                                            <div className="title-box">
                                                <div className="inner marB30">
                                                    <h2 className="marB100 " >
                                                        {cus.product_name}  
                                                    </h2>

                                                </div>
                                                <div className="clear"></div>
                                                {/* <!--Options--> */}
                                                <div className="prod-options marB10">

                                                    <div className="clearfix">
                                                        <div>
                                                            <div className="tag-list padL0 marL5 marB5">
                                                                <label><strong>Size : </strong> </label>
                                                                <Link className="btnlight" >{cus.kproduct_size}</Link>
                                                            </div>
                                                            <div className="tag-list padL0 marL5">
                                                                <label className=""><strong>Weight : </strong> </label>

                                                                <Link className="btnlight" >{cus.kproduct_weight}</Link>
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
                                                                                <h3 className="title text-center"><Link aria-current="page"
                                                                                    className="active"
                                                                                    href="/Kitchen-Sink/ProductKichansink/19">Granite
                                                                                    Series</Link></h3>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-2"></div>
                                                                                <div className="col-lg-10"><img
                                                                                    src="https://www.quazitosink.com/wp-content/uploads/2022/04/granite-color-1024x244.png"
                                                                                    className="img-fluid "
                                                                                    alt="Latest Corporation img kichan sink colour" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-8 col-md-5 padTB10">
                                                                            <div className="row">
                                                                                <h3 className="title text-center"><Link aria-current="page"
                                                                                    className="active"
                                                                                    href="/Kitchen-Sink/ProductKichansink/19">Metallic
                                                                                    Series</Link></h3>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-2"></div>
                                                                                <div className="col-lg-10"><img
                                                                                    src="https://www.quazitosink.com/wp-content/uploads/2022/04/metalic-color-1024x280.png"
                                                                                    className="img-fluid "
                                                                                    alt="Latest Corporation img kichan sink colour" />
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
                                        <h3 className="title text-center"><Link aria-current="page" className="active"
                                        ></Link>
                                        </h3>
                                    </div>
                                    <div className="row container">
                                        <div className="col-lg-1"></div>
                                        <div className="col-lg-11 mb-1"><img className="img-fluid "
                                            alt="Latest Corporation img kitchan sink Dimensions"
                                            src={cus.kproduct_dimensions} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--//=========product Detail End=========//--> */}
                {/* <!--//==product Description Start==//--> */}
                <section className="page_single marB10">
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
                                                Maecenas ladata ante, mattis sed euismod sed, iaculis sed libInteger tortor tellus,
                                                varius ac maximus at, vehicula nec purus. Ut at posuere sapien, ut molestie nisi.
                                                Donec mauris justo, Praesent sed interdum arcu, eget interdum elit. Proin quis
                                                sapien a ex ultrices condimentum eu vel neque. Donec maximus, erat eu mattis
                                                feugiat, nisl tellus vehicula lorem, ut ullamcorper ex risus eu magna. Cum sociis
                                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            <p>Condimentum sed magna ut Maecenas ladata ante, mattis sed euismod sed, iaculis sed
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
                </section></>
        );
    });

    return (
        <>
            {/* <!--//==Page Header Start==//--> */}
            <div className="page-header black-overlay">
                <div className="container breadcrumb-section">
                    <div className="row pad-s15">
                        <div className="col-md-12">
                            <h2>KITCHEN SINK</h2>
                            <div className="clear"></div>
                            <div className="breadcrumb-box">
                                <ul className="breadcrumb">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/kitchensink">kitchen Sink</Link>
                                    </li>
                                    <li className="active">Kitchen Sink Detail</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--//==Page Header End==//--> */}
            {customerdetails}

            {/* <!--//==product Description End==//--> */}
        </>
    )
}

export default KitchenSinkById