import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../Context/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Book() {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState(search.destination);
  const [checkIn, setCheckIn] = useState(search.checkIn);
  const [checkOut, setCheckOut] = useState(search.checkOut);
  const [adultCount, setAdultCount] = useState(search.adultCount);
  const [childCount, setChildCount] = useState(search.childCount);

  const handleSubmit = (event) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-gradient-to-r from-blue-300 to-blue-500 border border-gray-300 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-center"
    >
    
       
       
    
      <div className="flex bg-white p-3 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
        <label className="flex items-center mr-4">
          Adults:
          <input
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
            className="ml-2 w-12 p-1 text-center focus:outline-none"
          />
        </label>
        <label className="flex items-center">
          Children:
          <input
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
            className="ml-2 w-12 p-1 text-center focus:outline-none"
          />
        </label>
      </div>
      <DatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        selectsStart
        startDate={checkIn}
        endDate={checkOut}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText="Check-in Date"
        className="w-full bg-white p-3 rounded-lg shadow-md transform hover:scale-105 transition duration-300 focus:outline-none"
      />
      <DatePicker
        selected={checkOut}
        onChange={(date) => setCheckOut(date)}
        selectsEnd
        startDate={checkIn}
        endDate={checkOut}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText="Check-out Date"
        className="w-full bg-white p-3 rounded-lg shadow-md transform hover:scale-105 transition duration-300 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white font-bold p-3 rounded-lg shadow-md transform hover:scale-105 hover:bg-yellow-600 transition duration-300"
      >
        Search
      </button>
    </form>
  );
}
