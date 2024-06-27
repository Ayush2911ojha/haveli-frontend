import React, { useEffect, useState } from 'react';
import AllHotels from './AllHotels';
import { facility } from '../../components/data/Data';



const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:8080/hotels');
        const data = await response.json();
        console.log(data);
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hotel List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {hotels.map(hotel => (
          <AllHotels
            key={hotel.id}
            hotelDetails={{
              id: hotel.id,
              name: hotel.name,
              details: hotel.details,
              img: hotel.mainImage,
              facility: hotel.facilities,
              price: hotel.pricing
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
