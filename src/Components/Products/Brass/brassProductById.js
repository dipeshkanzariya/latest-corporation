import { useEffect, useState } from "react";
import "../../../main.css";
import { Link, useNavigate, useParams } from "react-router-dom";
function BrassProductById() {
    const Navigate = useNavigate();
    const [data, setData] = useState([]);
    const param = useParams();
    const APIurl = "https://uniqueadmin.latestcorporation.com/admin_latest_corporation/api/getperticulerbrass.php?apikey=9537290206&product_id=";

    useEffect(() => {
        fetch(APIurl + param.id, { method: "GET" })
            .then((res) => res.json())
            .then((res) => setData(res.data));
    });

    const pageHeader = data.map((data) => {
        return (
            <>
                {/* <!--//==Page Header Start==//--> */}
                <div className="page-header black-overlay">
                    <div className="container breadcrumb-section">
                        <div className="row pad-s15">
                            <div className="col-md-12">
                                <h2>{data.product_name}</h2>
                                <div className="clear"></div>
                                <div className="breadcrumb-box">
                                    <ul className="breadcrumb">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/products/brass">Brass</Link>
                                        </li>
                                        <li className="active">product Detail</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--//==Page Header End==//--> */}
            </>
        )
    })

    const formatedData = data.map((data) => {
        return (
            <>
                {/* <!--//==product Description Start==//--> */}
                <section className="page_single">

                    <div className="container marT40">
                        <div className="col-md-12">
                            <div className="centered-title">
                                <h2>Product Description<span className="heading-border"></span></h2>
                                <div className="clear"></div>
                                <em>{data.product_description}</em>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <hr/>
                    </div>
                    

                    <div className="container marT30">
                        <div className="row marL30 marR30">
                            <div className="col-md-6">
                                <div className="row marB10">
                                    <div className="prod-info-section">
                                        <div className="clearfix">
                                            <div className="col-md-12">
                                                <div className="block-caption">
                                                    <div className="left-title">
                                                        <h2>Product Range <span className="heading-border-2"></span></h2>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <p>{data.product_range}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="col-md-6">
                                <div className="row marB10">
                                    <div className="prod-info-section">
                                        <div className="clearfix">
                                            <div className="col-md-12">
                                                <div className="block-caption">
                                                    <div className="left-title">
                                                        <h2>Product Tolerance<span className="heading-border-2"></span></h2>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <p>{data.product_tolerance}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>

                        <div className="row marL30 marR30">
                            <div className="col-md-6">
                                <div className="row marB10">
                                    <div className="prod-info-section">
                                        <div className="clearfix">
                                            <div className="col-md-12">
                                                <div className="block-caption">
                                                    <div className="left-title">
                                                        <h2>Product Sample Time <span className="heading-border-2"></span></h2>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <p>{data.product_sample_time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="col-md-6">
                                <div className="row marB10">
                                    <div className="prod-info-section">
                                        <div className="clearfix">
                                            <div className="col-md-12">
                                                <div className="block-caption">
                                                    <div className="left-title">
                                                        <h2>Product Drawing Format<span className="heading-border-2"></span></h2>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <p>{data.product_drawing_formate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>

                        <div className="row marL30 marR30">
                            <div className="col-md-6">
                                <div className="row marB10">
                                    <div className="prod-info-section">
                                        <div className="clearfix">
                                            <div className="col-md-12">
                                                <div className="block-caption">
                                                    <div className="left-title">
                                                        <h2>Product Threads<span className="heading-border-2"></span></h2>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <p>{data.product_threads}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="col-md-6">
                                <div className="row marB10">
                                    <div className="prod-info-section">
                                        <div className="clearfix">
                                            <div className="col-md-12">
                                                <div className="block-caption">
                                                    <div className="left-title">
                                                        <h2>Product Surface Treatment<span className="heading-border-2"></span></h2>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <p>{data.product_surface_treatment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>

                        <div className="row marL30 marR30">
                            <div className="col-md-6">
                                <div className="row marB10">
                                    <div className="prod-info-section">
                                        <div className="clearfix">
                                            <div className="col-md-12">
                                                <div className="block-caption">
                                                    <div className="left-title">
                                                        <h2>Product Packaging<span className="heading-border-2"></span></h2>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <p>{data.product_packaging}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="col-md-6">
                                <div className="row marB10">
                                    <div className="prod-info-section">
                                        <div className="clearfix">
                                            <div className="col-md-12">
                                                <div className="block-caption">
                                                    <div className="left-title">
                                                        <h2>Product Shipping<span className="heading-border-2"></span></h2>
                                                        <div className="clear"></div>
                                                    </div>
                                                    <p>{data.product_shipping}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </section >
                {/* <!--//==product Description End==//--> */}
            </>
        );
    });

    return (
        <>
            {pageHeader}

            {/* <!--//=========product Detail Start=========//--> */}
            <section className="collection-section padT100">
                <div className="container-fluid">
                    <div className="row brass-product-container">
                        <div className="col-md-3 col-sm-12 mr-1 brass-outer-card">
                            <div className="latest-collection-item">
                                <div className="wa-collection">
                                    <div className="wa-collection-thumbnail item our-collection-item wa-item brass-product-image-container">
                                        <img src="/Images/collection/1.jpg" className="hidden-xs" alt="" />
                                        <img src="/Images/collection/1-xs.jpg" className="hidden-sm hidden-lg hidden-md" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 brass-outer-card">
                            <div className="latest-collection-item">
                                <div className="wa-collection">
                                    <div className="wa-collection-thumbnail item our-collection-item wa-item brass-product-image-container">
                                        <img src="/Images/collection/2.jpg" className="hidden-xs" alt="" />
                                        <img src="/Images/collection/2-xs.jpg" className="hidden-sm hidden-lg hidden-md" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="clear"></div> */}
                        <div className="col-md-3 col-sm-12 brass-outer-card">
                            <div className="latest-collection-item">
                                <div className="wa-collection">
                                    <div className="wa-collection-thumbnail item our-collection-item wa-item brass-product-image-container">
                                        <img src="/Images/collection/3.jpg" className="hidden-xs" alt="" />
                                        <img src="/Images/collection/3-xs.jpg" className="hidden-sm hidden-lg hidden-md" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 brass-outer-card">
                            <div className="latest-collection-item">
                                <div className="wa-collection">
                                    <div className="wa-collection-thumbnail item our-collection-item wa-item brass-product-image-container">
                                        <img src="/Images/collection/4.jpg" className="hidden-xs" alt="" />
                                        <img src="/Images/collection/4-xs.jpg" className="hidden-sm hidden-lg hidden-md" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--//=========product Detail End=========//--> */}

            {formatedData}
        </>
    )
}

export default BrassProductById