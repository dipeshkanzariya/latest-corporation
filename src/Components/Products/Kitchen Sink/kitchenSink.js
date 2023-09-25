import "../../../main.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink, useNavigate} from 'react-router-dom';

function KitchenSink() {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    // setLoding(false);
     const navigate = useNavigate();
  
     useEffect(() => {
      
      fetch(
        "https://uniqueadmin.latestcorporation.com/admin_latest_corporation/api/getkitchensink.php?apikey=9537290206",setisLoading(true)
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res.data);
          setisLoading(false);
        });
    
  }, []);
  var i=1;
  const  customerdetails = data.map((cus) =>{
   return(
    <>
     <div className="col-md-6 col-sm-12 col-xs-12">
    <div className="wa-products">
        <div className="col-lg-5 col-md-5 col-sm-3 col-xs-12">
            <div className="row">
                <div className="wa-products-thumbnail wa-item sinkimg">
                    <img src={"https://uniqueadmin.latestcorporation.com/admin_latest_corporation/Images/" + cus.kproduct_image} alt=""/>
                    <div className="caption"></div>
                </div>
            </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-9 col-xs-12">
            <div className="row">
                <div className="wa-products-caption wa-list-caption text-left">
                    <h2  onClick={() => {
                    navigate(
                      "/Kitchen-Sink/ProductKichansink/" + cus.product_id
                    );
                  }}>
                        <Link > {cus.product_name} {i++} </Link>
                    </h2>
                    <div className="clear"></div>
                   
                    <div className="clear"></div>
                    
                    <p>
                       
                    </p>
                    <ul className="wa-products-icon"   onClick={() => {
              navigate("/products/kitchensink/" + cus.product_id);}}>
                        {/* <!-- <li><Link to="" title="Add to wishlist"><i className="fa fa-heart-o"></i></Link></li> --> */}
                        <li><Link title="Quick View"><i className="fa fa-eye"></i></Link></li>
                        {/* <!-- <li><Link to="" title="Add to cart"><i className="fa fa-shopping-basket"></i></Link></li> --> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
   );
   
});
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
              
              {/* <!--//=========product list Section Start=========//--> */}
              <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="row product-list">
                      {/* <!--product Item--> */}
                      {customerdetails}
                      <div className="clear"></div>
                     
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