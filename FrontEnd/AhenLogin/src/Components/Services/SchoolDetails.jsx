import { useState } from "react";
import PropTypes from "prop-types";
import "./SchoolDetails.css";

const SchoolDetails = ({ school }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    timeSlot: "",
    mobileNumber: "",
    pickupLocation: "",
  });

  const timeSlots = [
    "8-10",
    "10-12",
    "12-2",
    "2-4",
    "4-6",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="school-details-container">
      <h2 className="school-name">{school.name}</h2>
      <p className="location">Location: {school.location}</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Preferred Time Slot:
          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </label>
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Pickup Location:
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="book-btn">Book</button>
      </form>
    </div>
  );
};

SchoolDetails.propTypes = {
  school: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default SchoolDetails;
