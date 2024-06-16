import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";


export default function About() {
  return (
    <>
     
      <div className="container mx-auto py-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h6 className="text-primary uppercase mb-4">About Us</h6>
            <h1 className="text-4xl font-bold mb-6">
              Welcome to <span className="text-primary uppercase">Haweli24</span>
            </h1>
            <p className="mb-6">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <div className="flex flex-wrap -mx-2 mb-8">
              {about.map((item, key) => (
                <div className="w-1/3 px-2" key={key}>
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      {item.icon}
                      <h2 className="text-2xl font-bold mb-1">{item.count}</h2>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a className="bg-primary text-white py-3 px-5 rounded" href="">
              Explore More
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap">
              <div className="w-1/2 pr-2 mb-4">
                <img
                  className="rounded w-3/4 mx-auto"
                  src="/assets/img/about-1.jpg"
                  style={{ marginTop: "25%" }}
                  alt="About 1"
                />
              </div>
              <div className="w-1/2 pl-2 mb-4">
                <img
                  className="rounded w-full"
                  src="/assets/img/about-2.jpg"
                  alt="About 2"
                />
              </div>
              <div className="w-1/2 pr-2">
                <img
                  className="rounded w-1/2 mx-auto"
                  src="/assets/img/about-3.jpg"
                  alt="About 3"
                />
              </div>
              <div className="w-1/2 pl-2">
                <img
                  className="rounded w-3/4 mx-auto"
                  src="/assets/img/about-4.jpg"
                  alt="About 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
