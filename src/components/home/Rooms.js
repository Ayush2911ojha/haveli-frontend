import React from "react";

import { facility, roomItems } from "../data/Data";
import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-center mt-8 mb-4">Our Hotels</h2>

        </div>
        <div className="flex flex-wrap -mx-4">
          {roomItems.map((item, key) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={key}>
              <div className="room-item shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <img className="w-full h-64 object-cover" src={item.img} alt="img" />
                  <small className="absolute left-0 bottom-4 bg-primary text-white rounded py-1 px-3 ml-4">
                    {item.price}
                  </small>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="mb-0 text-xl font-semibold">{item.name}</h5>
                    <div className="pl-2">{item.star}</div>
                  </div>
                  <div className="flex mb-3 space-x-4">
                    {facility.map((facilityItem, index) => (
                      <small className="flex items-center space-x-1" key={index}>
                        <span className="border-r pr-3">{facilityItem.icon}</span>
                        <span>{facilityItem.quantity} {facilityItem.facility}</span>
                      </small>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex justify-between">
                    <a
                      className="btn btn-sm bg-primary text-white rounded py-2 px-4"
                      href=""
                    >
                      {item.yellowbtn}
                    </a>
                    <Link className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold capitalize py-2 px-4 rounded-lg shadow-md transition duration-300" to={'/form'}>
                      {item.darkbtn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
