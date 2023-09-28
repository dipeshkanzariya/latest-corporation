import { useEffect, useState } from "react";
import "../../../main.css";
import { Link, useNavigate } from "react-router-dom";
function BrassProducts() {
    const Navigate = useNavigate;
    const [data, setData] = useState([]);
    const APIurl = "https://uniqueadmin.latestcorporation.com/admin_latest_corporation/api/getbrass.php?apikey=9537290206";

    useEffect(() => {
        fetch(APIurl).then((res) => {
            return res.json();
        }).then((res) => {
            setData(res.data);
        })
    },[]);

    const formatedData = data.map((brass) => {
        return (
            <>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pad10 ">
                                <div className="wa-products">
                                    <div className="wa-products-thumbnail wa-item">
                                        <img src="/Images/product/brass insert.jpg" alt=""/>
                                         <div className="caption">
                                            <div className="caption-text">
                                                <ul className="wa-products-icon">
                                                   
                                                    <li><Link to ={"/products/brass/" + brass.product_id} className="quickview-box-btn" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                    
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="wa-products-caption">
                                        <h2>
                                           <Link to={"/products/brass/" + brass.product_id}>{brass.product_name}</Link>
                                        </h2>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>
            </>
        );
    });

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
                                    <Link to="/">Home</Link>
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
                            <div>{formatedData}</div>
                            {/* <!--product Item--> */}
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