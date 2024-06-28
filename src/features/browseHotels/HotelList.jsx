import React, { useEffect, useState } from 'react';
import AllHotels from './AllHotels';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:8080/hotels');
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">
        Explore Our Hotels
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
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
      </div>
    </div>
  );
};

export default HotelList;
