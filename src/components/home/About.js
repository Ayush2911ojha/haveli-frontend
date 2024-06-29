import React, { useEffect, useState } from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";
import "./About.css";

const About = () => {

   useEffect(() => {
    const images = document.querySelectorAll(".animate-fadeIn");
    images.forEach((image) => {
      image.classList.add("visible");
    });
  }, []);
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <Heading level={2} className="text-3xl mb-6 text-primary">
              About Us
            </Heading>
            <h1 className="text-5xl font-bold  mb-8 text-primary">
              Welcome to <span className="uppercase">Haweli24</span>
            </h1>
            <p className="mb-8 text-lg text-gray-800 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {about.map((item, key) => (
                <div
                  key={key}
                  className="rounded-lg p-6 bg-yellow-400 shadow-2xl hover:bg-yellow-200 transition duration-300"
                >
                  <div className="text-center">
                    <CountUp target={item.count} />
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap -mx-4 bg-gray-100 shadow-sm">
              {['about-1.jpg', 'about-2.jpg', 'about-3.jpg', 'about-4.jpg'].map((img, index) => (
                <div
                  className="w-1/2 px-4 mb-4 animate-fadeIn"
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    className="rounded-lg w-full hover:shadow-xl transition duration-300 transform hover:scale-105"
                    src={`/assets/img/${img}`}
                    alt={`About ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000; 
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h2 className="text-4xl text-gray-600 font-bold mb-1 text-primary">
    {count}+
    </h2>
  );
};

export default About;
