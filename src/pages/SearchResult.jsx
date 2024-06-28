import React from "react";
import { roomItems, facility } from "../components/data/Data";
import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">Available Hotels</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {roomItems.map((item, key) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={key}>
              <div className="room-item shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover filter brightness-75" // Adjust brightness level as needed
                    src={item.img}
                    alt="img"
                  />
                  <small className="absolute left-0 bottom-4 bg-primary text-white rounded py-1 px-3 ml-4">
                    {item.price}
                  </small>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="mb-0 text-xl font-semibold">{item.name}</h5>
                    <div className="flex items-center">
                      {Array.from({ length: item.star }, (_, index) => (
                        <svg key={index} className="h-5 w-5 text-yellow-500 fill-current">
                          <path d="M12 2l3.09 6.36L22 9.27l-5 4.88 1.18 6.86L12 18.77 6.82 21.01 8 14.15l-5-4.88 6.91-.91L12 2z" />
                        </svg>
                      ))}
                    </div>
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
                    <Link
                      className="btn btn-sm bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
                      to={'/form'}
                    >
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
};

export default SearchResult;
