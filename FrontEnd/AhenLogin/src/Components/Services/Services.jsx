import { useState, useEffect } from "react";
import "../Services/Services.css";
import "./StarRating.jsx";
import { Link } from "react-router-dom";
import StarRating from "./StarRating.jsx";
import SchoolDetails from "./SchoolDetails.jsx";

const Services = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [drivingSchoolsData, setDrivingSchoolsData] = useState([]);
  const [filter, setFilter] = useState({ rating: 0, city: "" });
  const [sortedBy, setSortedBy] = useState("distance");

  useEffect(() => {
    fetch("http://localhost:8081/services")
      .then((res) => res.json())
      .then((data) => setDrivingSchoolsData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const cities = [...new Set(drivingSchoolsData.map((school) => school.city))];

  const handleBookNowClick = (school) => {
    setSelectedSchool(school);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFilter({ ...filter, city: selectedCity });
  };

  // Function to filter driving schools based on rating and city
  const filteredDrivingSchools = drivingSchoolsData.filter(
    (school) =>
      school.rating >= filter.rating &&
      (filter.city === "" ||
        school.city.toLowerCase() === filter.city.toLowerCase())
  );

  // Function to sort driving schools based on the selected sorting option
  const sortedDrivingSchools = filteredDrivingSchools.sort((a, b) => {
    if (sortedBy === "distance") return a.distance - b.distance;
    if (sortedBy === "hourlyCharges") return a.hourlyCharges - b.hourlyCharges;
    return b.rating - a.rating;
  });

  return (
    <div className="flex min-h-screen">
      <div className="w-1/6 filter-column p-4 bg-gray-200 sticky top-0 h-screen overflow-y-hidden">
        <div className="ml-2 mt-4">
          <h2 className="text-3xl font-semibold mb-4 filter-sort-heading">
            Filter & Sort
          </h2>

          <div className="mb-4 filter-by-rating">
            <label className="block text-xl font-medium text-gray-600">
              Filter by Rating:
            </label>

            <div className="text-base grid items-center">
              {[0, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  {rating === 0 && (
                    <span
                      className=""
                      style={{
                        marginRight: "48px",
                      }}
                    >
                      All
                    </span>
                  )}
                  {rating !== 0 && <StarRating rating={rating} />}
                  <input
                    type="checkbox"
                    id={`ratingFilter${rating}`}
                    checked={filter.rating === rating}
                    onChange={() => setFilter({ ...filter, rating })}
                    className="mx-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Filter by City */}
          <div className="filter-for-mobile">
            <div className="mb-4 filter-by-city">
              <label
                htmlFor="cityFilter"
                className="block text-xl font-medium text-gray-600"
              >
                Filter by City:
              </label>
              <select
                id="cityFilter"
                value={filter.city}
                onChange={handleCityChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">All</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="filter-sort">
              <label
                htmlFor="sortFilter"
                className="block text-xl font-medium text-gray-600"
              >
                Sort By:
              </label>
              <select
                id="sortFilter"
                onChange={(e) => setSortedBy(e.target.value)}
                value={sortedBy}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sort-for-mobile"
              >
                <option value="distance">Distance</option>
                <option value="rating">Rating</option>
                <option value="hourlyCharges">Hourly Charges</option>
              </select>
            </div>
          </div>

          <Link
            to={"/add"}
            className="new-class mt-4 add-class-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => console.log("Add new driving class clicked")}
          >
            {" "}
            Add New Driving Class
          </Link>
        </div>
      </div>
      {/* List of Driving Schools */}
      <div
        className="w-5/6 p-4 list-column"
        style={{
          backdropFilter: "blur(10px)",
          overflowY: "auto",
          height: "calc(100vh - 2rem)",
        }}
      >
        {sortedDrivingSchools.map((school) => (
          <div
            key={school.id}
            className="border p-4 mb-4 bg-white shadow-md rounded-md flex school-card"
            onClick={() => handleBookNowClick(school)}
          >
            <div className="mr-4 school-imgs">
              <img
                src={school.img}
                alt={`Logo ${school.name}`}
                className="object-fill"
              />
            </div>

            <div className="ml-4 info-box">
              <h3 className="text-2xl font-serif font-semibold mb-4 school-name">
                {school.name}
              </h3>

              <div className="card-info grid grid-cols-2 mb-2">
                <div className="info">
                  <p className="text-gray-600">
                    <strong>City: </strong>
                    {school.city}
                  </p>
                </div>
                <div className="info">
                  <p className="text-gray-600">
                    <strong>
                      Rating: <StarRating rating={school.rating} />{" "}
                    </strong>
                  </p>
                </div>
                <div className="info">
                  <p className="text-gray-600">
                    <strong>Distance: </strong>
                    {school.distance}
                  </p>
                </div>
                <div className="info">
                  <p className="text-gray-600">
                    <strong>Hourly Charges:</strong> ₹{school.hourlyCharges}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm py-2.5 text-center mb-2"
                  style={{ width: "100px" }}
                  onClick={() => handleBookNowClick(school)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Render SchoolDetails when a school is selected */}
      {selectedSchool && (
        <SchoolDetails
          school={selectedSchool}
          onClose={() => setSelectedSchool(null)}
        />
      )}
    </div>
  );
};

export default Services;
