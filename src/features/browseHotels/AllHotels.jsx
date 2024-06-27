import React from 'react'

const AllHotels = ({ hotelDetails }) => {
    const { id,name, details,img,price,facility } = hotelDetails;
    console.log("hoyels mna,e", name);
    return (
      <li className='w-full hover:shadow-2xl p-9 rounded-md shadow-sm bg-slate-50 duration-150'>
        <h2>Hotel ID: {name}</h2>
          
            <img src={img} alt="room" />
            <h3>Details: {details}</h3>
            <p>Rooms: {facility.rooms}</p>
            <p>Washroom:{facility.washroom}</p>
            <h2>Price/night: { price}</h2>
      </li>
    );
}

export default AllHotels