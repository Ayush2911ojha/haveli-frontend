import React from "react";
import { services } from "../data/Data";
import CommonHeading from "../common/commonHeading";


export default function Services() {
  return (
    <>
      <div className="container mx-auto mt-24 py-20">
      <div className="text-center text-black font-extrabold animate-pulse">
      <CommonHeading
        heading="Our Services"
        title="Services"
        subtitle="Explore Our"
      />
    </div>
        <div className="flex flex-wrap -mx-4">
          {services.map((item, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 bg-yellow-200 px-4 mb-8" key={index}>
              <a className="service-item rounded-lg block p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300" href="">
                <div className="service-icon bg-transparent border   rounded-lg p-2 mb-4 flex items-center justify-center">
                  <div className="w-full text-yellow-700 h-full border rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h5 className="mb-3 text-xl font-semibold">{item.name}</h5>
                <p className="text-gray-600 mb-0">{item.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
