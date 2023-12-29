import myImage from "../images/googleIcon.svg";
import Validation from "../Signup/SignupValidation";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Home/Home.css";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  let options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(values) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password==="") {
      fetch('http://localhost:8081/signup',options)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  }

  return (
    <>
      <div className="min-h-screen">
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
        <div className="flex signup-box justify-center mt-4 min-h-screen">
          <div className="card-container">
            <div className="card">
              <h2 className="text-center mb-4">Sign-Up</h2>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 rounded-input">
                  <label htmlFor="name" className="form-label">
                    <i className="fas fa-user"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="form-control"
                    onChange={handleInput}
                    required
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
                </div>

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
                  Sign Up
                </button>

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
                Already have an account? <Link to="/signin">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
