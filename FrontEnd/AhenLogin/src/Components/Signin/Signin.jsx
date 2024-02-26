import "./Signin.css";

import myImage from "../images/googleIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "./SigninValidation";
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
      fetch("http://localhost:8081/signin", options)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          if (data === "Success") {
            navigate("/welcome");
          } else {
            // alert("No data exists");
            setErrorMessage("Incorrect details, please re-enter!");
            console.log("Network error occurred");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="min-h-screen signin-screen">
        <div className="leftContainer">
          <div className="slogan">
            <h1 className="text-blue-950">Go Ahed</h1>
            <h1 className="text-blue-950">With Ahen</h1>
          </div>
          <div className="description">
            <p>
              Ahen, India&apos;s leading driving school, tackles common issues
              in driver education by offering affordable classes at Rs.100. With
              home services, flexible payments, and a focus on bike learning,
              Ahen aims to be the nation&apos;s top choice for quality and
              convenience in driving education.
            </p>
          </div>
        </div>
        <div className="flex signin-box justify-center mt-4 min-h-screen">
          <div className="card-container">
            <div className="card">
              <h2 className="text-center mb-4">Sign-in</h2>
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
                  Sign in
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
                Not a member? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
