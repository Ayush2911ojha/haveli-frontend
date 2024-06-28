import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";

export default function Carousel() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
   
     
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="relative">
        <Slider ref={sliderRef} {...settings}>
          {carouselData.map((val, index) => (
            <div key={index} className="relative">
              <img className="w-full" src={val.img} alt="Image" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white max-w-xl p-3">
                  <h6 className="text-lg uppercase mb-3 animate__animated animate__slideInDown">
                    {val.subtitle}
                  </h6>
                  <h1 className="text-5xl mb-4 animate__animated animate__slideInDown">
                    {val.title}
                  </h1>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="btn btn-primary py-3 px-5 animate__animated animate__slideInLeft"
                    >
                      {val.btn1}
                    </a>
                    <a
                      href="#"
                      className="btn btn-light py-3 px-5 animate__animated animate__slideInRight"
                    >
                      {val.btn2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
          type="button"
          onClick={previous}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
          type="button"
          onClick={next}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}
