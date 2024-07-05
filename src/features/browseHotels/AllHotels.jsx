import React from 'react';
import { Link } from 'react-router-dom';

const AllHotels = ({ hotelDetails }) => {
  const { id, name, details, img, price, facility } = hotelDetails;

  return (
    <li className="bg-white shadow-lg rounded-lg overflow-hidden duration-300 transform hover:scale-105">
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={img}
          alt={`Image of ${name}`}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">{name}</h2>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{details}</h3>
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.472 6.795H18.97l-5.625 4.607 2.18 6.607L10 15.33l-5.945 3.678 2.18-6.607L1.03 7.795h6.498L10 1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm sm:text-base text-gray-700">{facility.rooms}</p>
          </div>
          <p className="text-sm sm:text-base text-gray-600">Rooms</p>
        </div>
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.472 6.795H18.97l-5.625 4.607 2.18 6.607L10 15.33l-5.945 3.678 2.18-6.607L1.03 7.795h6.498L10 1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm sm:text-base text-gray-700">{facility.washroom}</p>
          </div>
          <p className="text-sm sm:text-base text-gray-600">Washroom</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">${price}</h2>
            <span className="text-sm sm:text-base text-gray-500 ml-1 sm:ml-2">/night</span>
          </div>
       <Link  to={'/form'}>  <button  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300">
            Book Now
          </button> </Link>
        </div>
      </div>
    </li>
  );
};

export default AllHotels;
