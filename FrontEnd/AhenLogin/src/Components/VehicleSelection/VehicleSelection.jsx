// // VehicleSelection.jsx

// import './VehicleSelection.css';
// import BookingForm from '../Booking/BookingForm';

// // Dummy data for driving schools
// const drivingSchools = [
//   {
//     id: 1,
//     name: 'City Driving School',
//     location: '123 Main Street, Cityville',
//     contact: '123-456-7890',
//   },
//   {
//     id: 2,
//     name: 'Safe Roads Driving Academy',
//     location: '456 Oak Avenue, Safetown',
//     contact: '987-654-3210',
//   },
//   {
//     id: 3,
//     name: 'MasterDrive Training Center',
//     location: '789 Elm Road, Mastertown',
//     contact: '567-890-1234',
//   },
//   {
//     id: 4,
//     name: 'Speedy Learners Driving School',
//     location: '321 Pine Lane, Speedytown',
//     contact: '234-567-8901',
//   },
//   {
//     id: 5,
//     name: 'Precision Driving Institute',
//     location: '876 Cedar Street, Precision City',
//     contact: '345-678-9012',
//   },
//   {
//     id: 6,
//     name: 'Elite Driver Training School',
//     location: '543 Birch Boulevard, Elitetown',
//     contact: '678-901-2345',
//   },
//   // Add more schools as needed
// ];

// const VehicleSelection = () => {
//   const [selectedSchool, setSelectedSchool] = useState(null);
//   const [isBookingFormVisible, setBookingFormVisible] = useState(false);

//   const handleBookNowClick = (school) => {
//     setSelectedSchool(school);
//     setBookingFormVisible(true);
//   };

//   const handleBookingFormClose = () => {
//     setSelectedSchool(null);
//     setBookingFormVisible(false);
//   };

//   return (
//     <div className="vehicle-selection-container">
//       <h2>Choose Your Driving School</h2>
//       <ul className="school-list">
//         {drivingSchools.map((school) => (
//           <li key={school.id} className="school-item">
//             <div className="school-info">
//               <h3>{school.name}</h3>
//               <p>Location: {school.location}</p>
//               <p>Contact: {school.contact}</p>
//             </div>
//             <button onClick={() => handleBookNowClick(school)}>Book Now</button>
//           </li>
//         ))}
//       </ul>

//       {isBookingFormVisible && (
//         <div className="booking-overlay">
//           <BookingForm school={selectedSchool} onClose={handleBookingFormClose} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default VehicleSelection;
