import "./AdminLogin.css";

import myImage from "../images/googleIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "./AdminLoginValidation.jsx";
import "../Home/Home.css";

function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    setErrors(Validation(values));

    if (errors.email === "" && errors.password === "") {
      fetch("http://localhost:8081/admin", options)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          if (data === "Success") {
            navigate("/dashboard");
          } else if (data === "IncorrectPassword") {
            setErrorMessage("Incorrect password, please re-enter!");
          } else {
            setErrorMessage("Email does not exists");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="min-h-screen signin-screen">
        <div className="flex signin-box justify-center mt-4 min-h-screen">
          <div className="card-container">
            <div className="card">
              <h2 className="text-center mb-4">School Login</h2>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 rounded-input">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="form-control"
                    onChange={handleInput}
                    required
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>

                <div className="mb-3 rounded-input">
                  <label htmlFor="password" className="form-label">
                    <i className="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="form-control"
                    onChange={handleInput}
                    required
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full my-2"
                >
                  Login
                </button>

                {errorMessage && (
                  <div className="text-red-500 text-center">{errorMessage}</div>
                )}

                <div className="text-center or-section">
                  <hr className="or-line" />
                  <span className="or-text">OR</span>
                  <hr className="or-line" />
                </div>
              </form>

              <div className="flex m-5 items-center mb-3 google text-center rounded-md">
                <img src={myImage} alt="" className="googleIcon mr-2" />
                <span>Continue with Google</span>
              </div>

              <p className="text-center mt-3">
                Not a member? <Link to="/add">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
