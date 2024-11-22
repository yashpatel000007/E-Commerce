import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      };

    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/static_web_Stop_Life_d3a20e4a7e/static_web_Stop_Life_d3a20e4a7e.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/static_web_Tommy_Hilfiger_Levis_and_more_8b8dca7af1/static_web_Tommy_Hilfiger_Levis_and_more_8b8dca7af1.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/static_web_Forever_New_AND_and_more_4667ba53e6/static_web_Forever_New_AND_and_more_4667ba53e6.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/static_web_Adidas_puma_and_more_fab67b1371/static_web_Adidas_puma_and_more_fab67b1371.png" className="w-100"/>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner;