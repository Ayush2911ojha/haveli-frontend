import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <Heading level={2} className="text-3xl mb-6 text-primary">
                About Us
              </Heading>
              <h1 className="text-5xl font-bold mb-8 text-primary">
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
                    className=" rounded-lg p-6 bg-yellow-400 shadow-2xl hover:bg-yellow-200  transition duration-300"
                  >
                    <div className="text-center">
                      <h2 className="text-4xl text-gray-600 font-bold mb-1 text-primary">
                        {item.count}
                      </h2>
                      <p className="text-lg text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap -mx-4 bg-gray-100 shadow-sm">
                <div className="w-1/2 px-4 mb-4">
                  <img
                    className="rounded-lg w-full hover:shadow-xl transition duration-300"
                    src="/assets/img/about-1.jpg"
                    alt="About 1"
                  />
                </div>
                <div className="w-1/2 px-4 mb-4">
                  <img
                    className="rounded-lg w-full hover:shadow-xl transition duration-300"
                    src="/assets/img/about-2.jpg"
                    alt="About 2"
                  />
                </div>
                <div className="w-1/2 px-4 mb-4">
                  <img
                    className="rounded-lg w-full hover:shadow-xl transition duration-300"
                    src="/assets/img/about-3.jpg"
                    alt="About 3"
                  />
                </div>
                <div className="w-1/2 px-4 mb-4">
                  <img
                    className="rounded-lg w-full hover:shadow-xl transition duration-300"
                    src="/assets/img/about-4.jpg"
                    alt="About 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
