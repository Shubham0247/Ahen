import React from 'react';
import './Location.css'; 

const Location = () => {
  return (
    <>
      <div className="heading-container">
        <h1 className="location-heading welcome">Explore Our Driving School Location</h1>
        <p className="location-subheading welcome italic font-bold">Visit us and experience the journey of safe driving</p>
      </div>
      <div className="location-container map-container">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1wRKxzDlp3R_elyKz3nd1BSwMEGMJwjo&ehbc=2E312F"
          className="map-iframe"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Location;
