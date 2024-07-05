import React from 'react';

const Confirmation = ({ bookingDetails }) => {
    return (
        <div>
            <h2>Booking Confirmation</h2>
            <p>Room Number: {bookingDetails.roomNumber}</p>
            <p>Price: ${bookingDetails.price}</p>
            <p>Location: {bookingDetails.location}</p>
            {/* Additional confirmation details */}
        </div>
    );
};

export default Confirmation;
