import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";
import "./Carousel.css"; // Make sure to create this CSS file
import { Link } from "react-router-dom";

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
    <div className="container mx-auto p-0 mb-5">
      <div id="header-carousel" className="relative">
        <Slider ref={sliderRef} {...settings}>
          {carouselData.map((val, index) => (
            <div className="carousel-item relative" key={index}>
              <img className="w-full object-cover" src={val.img} alt="Image" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <div className="p-4 max-w-2xl text-center">
                  <h6 className="text-white text-lg uppercase mb-3 animate-slideInDown">
                    {val.subtitle}
                  </h6>
                  <h1 className="text-white text-4xl md:text-6xl mb-4 animate-slideInDown">
                    {val.title}
                  </h1>
                  <div className="flex justify-center space-x-4">
                    <Link
                      to="/hotelsList"
                      className="btn bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-slideInLeft"
                    >
                      {val.btn1}
                    </Link>
                    <Link
                      to="/hotelsList"
                      className="btn bg-white text-blue-600 py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-slideInRight"
                    >
                      {val.btn2}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-blue-600 text-white p-2 rounded-full"
          type="button"
          onClick={previous}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-blue-600 text-white p-2 rounded-full"
          type="button"
          onClick={next}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
