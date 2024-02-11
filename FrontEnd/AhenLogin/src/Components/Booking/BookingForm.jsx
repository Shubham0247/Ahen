// BookingForm.jsx

import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedSchool: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking submission logic here
    console.log('Form submitted:', formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <h2>Book Now</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="school">Select School:</label>
          <select
            id="school"
            name="selectedSchool"
            value={formData.selectedSchool}
            onChange={handleChange}
            required
          >
            <option value="">Select a school</option>
            <option value="school1">Driving School 1</option>
            <option value="school2">Driving School 2</option>
            {/* Add more schools as needed */}
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
