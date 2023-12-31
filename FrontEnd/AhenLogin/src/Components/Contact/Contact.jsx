import { useState } from "react";

export default function Contact() {
    // const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    tel: "",
    query: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  let options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(values),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8081/contact", options)
      .then((res) => {
        if (res.ok) {
          setSuccessMessage("Form submitted successfully!");
          setValues({
            name: "",
            email: "",
            tel: "",
            query: "",
          });
        } else {
          console.log("Network error occured");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative flex items-top justify-center min-h-[700px] sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg border border-black" style={{
              marginTop: "60px",
              height: "380px"
            }}>
              <h1 className="text-2xl sm:text-4xl text-black font-bold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-black mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-black text-justify">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  H-block Auto cluster Pimpri-411019
                </div>
              </div>

              <div className="flex items-center mt-4 text-black text-justify">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  9325262490
                </div>
              </div>

              <div className="flex items-center mt-2 text-black text-justify">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  ahenbookit@gmail.com
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 flex flex-col justify-center mt-8"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  onChange={handleInput}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-black font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  onChange={handleInput}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-black font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  onChange={handleInput}
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-black font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="query" className="hidden">
                  Query
                </label>
                <textarea
                  onChange={handleInput}
                  name="query"
                  id="query"
                  placeholder="Your Query"
                  rows="4"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-black font-semibold focus:border-orange-500 focus:outline-none"
                ></textarea>
              </div>

              {successMessage && (
                <div className="text-green-500 text-center">
                  {successMessage}
                </div>
              )}

        
              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                Submit
              </button>
            </form>
          </div>
          <br />
          <div className="mt-8 md:mt-0  sm:rounded-lg p-0  overflow-hidden relative border border-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d95589.69802329544!2d73.79254064253388!3d18.753400181044462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQxJzQwLjMiTiA3M8KwNTEnNDYuMiJF!5e0!3m2!1sen!2sin!4v1703872793010!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
