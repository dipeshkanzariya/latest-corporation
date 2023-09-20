import "../main.css";

function Home() {
    return (
        <>
            {/* <!--//==Preloader Start==//--> */}
    {/* <div class="preloader">
        <div class="cssload-container">
            <div class="cssload-loading">
                <div id="object"><i class="fa fa-bath" aria-hidden="true"></i></div>
            </div>
            <h4 class="title">Loading</h4>
        </div>
    </div> */}
    {/* <!--//==Preloader End==//--> */}

    {/* <!--//=======Main Slider=======//--> */}
    <div class="wa_main_bn_wrap sliderd">
        <div id="home1-main-slider" class="owl-carousel owl-theme">
            <div class="item sliderimg">
                <figure>
                    <img src="././assets/img/all/wa-blog-detail3.jpg" class="hidden-xs hidden-sm " alt="" />
                    <img src="assets/img/all/wa-blog-detail3.jpg" class="hidden-lg hidden-md" alt="" />
                    <figcaption>
                        <div class="container">
                            {/* <!-- <h2><span class="">Luxury Faucets Collections</span></h2>
                            <span class="">flat 60% off for first 30 Customer.</span> --> */}

                            {/* <!-- <a href="collection-grid-sidebar.html" class="theme-button">Shop Now</a> --> */}
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="item sliderimg">
                <figure>
                    <img src="assets/img/all/wa-blog-detail2.jpg" class="hidden-xs hidden-sm " alt="" />
                    <img src="assets/img/all/wa-blog-detail2.jpg" class="hidden-lg hidden-md" alt="" />
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
        </>
    )
}

export default Home