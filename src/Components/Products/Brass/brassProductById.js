import "../../../main.css";
import { Link } from "react-router-dom";
function BrassProductById() {
    return (
        <>
            {/* <!--//==Page Header Start==//--> */}
    <div className="page-header black-overlay">
        <div className="container breadcrumb-section">
            <div className="row pad-s15">
                <div className="col-md-12">
                    <h2>Brass Product Detail</h2>
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

    {/* <!--//=========product Detail Start=========//--> */}
    <section className="collection-section padT100">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-8">
                    <div className="latest-collection-item">
                        <div className="wa-collection">
                            <div className="wa-collection-thumbnail item our-collection-item wa-item brass-product-image-container">
                                <img src="/Images/collection/1.jpg" className="hidden-xs" alt=""/>
                                <img src="/Images/collection/1-xs.jpg" className="hidden-sm hidden-lg hidden-md" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-4">
                    <div className="latest-collection-item">
                        <div className="wa-collection">
                            <div className="wa-collection-thumbnail item our-collection-item wa-item brass-product-image-container">
                                <img src="/Images/collection/2.jpg" className="hidden-xs" alt=""/>
                                <img src="/Images/collection/2-xs.jpg" className="hidden-sm hidden-lg hidden-md" alt=""/>	
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="col-md-6 col-sm-4">
                    <div className="latest-collection-item">
                        <div className="wa-collection">
                            <div className="wa-collection-thumbnail item our-collection-item wa-item brass-product-image-container">
                                <img src="/Images/collection/3.jpg" className="hidden-xs" alt=""/>
                                <img src="/Images/collection/3-xs.jpg" className="hidden-sm hidden-lg hidden-md" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-4">
                    <div className="latest-collection-item">
                        <div className="wa-collection">
                            <div className="wa-collection-thumbnail item our-collection-item wa-item brass-product-image-container">
                                <img src="/Images/collection/4.jpg" className="hidden-xs" alt=""/>
                                <img src="/Images/collection/4-xs.jpg" className="hidden-sm hidden-lg hidden-md" alt=""/>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//=========product Detail End=========//--> */}

    {/* <!--//==product Description Start==//--> */}
    <section className="page_single">
        <div className="container">
            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Discription <span className="heading-border-2"></span></h2>
                                </div>
                                <p>Nam quis magna in dui fringilla sodales et at ante. Nulla condimentum sed magna ut
                                    Maecenas lacus ante, mattis sed euismod sed, iaculis sed libInteger tortor tellus,
                                    varius ac maximus at, vehicula nec purus. Ut at posuere sapien, ut molestie nisi.
                                    Donec mauris justo, Praesent sed interdum arcu, eget interdum elit. Proin quis
                                    sapien a ex ultrices condimentum eu vel neque. Donec maximus, erat eu mattis
                                    feugiat, nisl tellus vehicula lorem, ut ullamcorper ex risus eu magna. Cum sociis
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Range <span className="heading-border-2"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>Nam quis magna in dui fringilla sodales et at ante. Nulla condimentum sed magna ut
                                    Maecenas lacus ante, mattis sed euismod sed, iaculis sed libInteger tortor tellus,
                                    varius ac maximus at, vehicula nec purus. Ut at posuere sapien, ut molestie nisi.
                                    Donec mauris justo, Praesent sed interdum arcu, eget interdum elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Sample Time <span className="heading-border-2"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>Available in 1-7 days for different items.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Threads<span className="heading-border-2"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>ISO Metric (MM) / BA / BSW / BSP / BSPT / BSF / BSB / UNC / UNF / UNEF / NPT / NPS / Specified Threads Any threads as per client specification.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Packaging<span className="heading-border-2"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>Standard package, Carton box or Pallet, As per customized specifications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Tolerance<span className="heading-border-2"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>With tight tolerance ±0.005 specific tolerances can be discussed with the customer, given the part material, size, and geometry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Drawing Format<span className="heading-border-2"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>CAD / PDF / DWG / IGS / STEP.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Surface Treatment<span className="heading-border-2"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>Natural Clean / Nickel Plated / Electro-Tin Plated / Silver Plated / Copper Plated / Zinc Plated / Chrome Plated / Specified Surface Finish</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row marB10">
                <div className="prod-info-section">
                    <div className="clearfix">
                        <div className="col-md-12">
                            <div className="block-caption">
                                <div className="left-title">
                                    <h2>Product Shipping<span className="heading-border-2"></span></h2>
                                    <div className="clear"></div>
                                </div>
                                <p>Available in 1-7 days for different items.</p>
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

export default BrassProductById