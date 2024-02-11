import { useState } from "react";

const AddDrivingSchool = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    img: "",
    city: "",
    rating: "",
    distance: "",
    hourlyCharges: "",
  });

    const handleInput = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  let options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(formData),
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/contact", options)
    .then((res) => {
      if (res.ok) {
        console.log("School Added Successfully");
      } else {
        console.log("Network error occured");
      }
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-md mx-auto mb-10 mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add a New Driving School</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-600">
            School ID:
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInput}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            School Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInput}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="img" className="block text-sm font-medium text-gray-600">
            School Image:
          </label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={handleInput}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-600">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInput}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInput}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="distance" className="block text-sm font-medium text-gray-600">
            Distance (m):
          </label>
          <input
            type="number"
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleInput}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hourlyCharges" className="block text-sm font-medium text-gray-600">
            Hourly Charges:
          </label>
          <input
            type="number"
            id="hourlyCharges"
            name="hourlyCharges"
            value={formData.hourlyCharges}
            onChange={handleInput}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDrivingSchool;
