// DrivingSchoolCard.jsx

import React from "react";
import "./DrivingSchoolList.css"; // Import the styles

const DrivingSchoolCard = ({ school }) => {
  return (
    <div className="driving-school-card">
      <h3>{school.name}</h3>
      <p>Cost: {school.cost}</p>
      <p>Distance: {school.distance}</p>
      <p>Location: {school.location}</p>
      <p>Reviews: {school.reviews}</p>
    </div>
  );
};

export default DrivingSchoolCard;
