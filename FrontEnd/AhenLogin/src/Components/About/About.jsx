import React from "react";
import "./About.css";
import myImg from "../images/img5.png";

export default function About() {
  return (
    <div className="py-16 bg-gradient">
      <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="welcome text-4xl font-bold text-center">
            <h2 className="text-white">Welcome to Ahen DriveTech</h2>
            <p className="text-white">
              Revolutionizing Driving Education in India!
            </p>
          </div>

          <p className=" welcome text-xl text-center font-semibold italic mb-8 ">
            "Drive with Confidence: Ahen DriveTech - India's Premier Driving
            Teaching Tech, <br /> Revolutionizing Learning for Skilled and
            Confident Drivers"
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 md:w-full">
            <div className="md:w-full md:max-w-xl">
              <div className="text-lg why-choose-container">
                <h3 className="font-bold mb-2 text-center why-choose-title">
                  Why Choose Ahen DriveTech?
                </h3>
                <p className="mb-4">
                  Embark on an affordable learning journey with Ahen DriveTech.
                  For just Rs.100, you can access quality driving education,
                  making it accessible to everyone.
                </p>
                <p className="mb-4">Our facilities include:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Home pickup and drop facility.</li>
                  <li>
                    Flexible payment plans, including per week and per month
                    options.
                  </li>
                  <li>
                    Learning opportunities for bikes, cars, rickshaws, and more.
                  </li>
                </ul>
                <p className="mb-4">
                  We aim to solve common problems in the driving sector:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    No more daily commutes to driving schools - we offer home
                    pickup and drop services.
                  </li>
                  <li>Fair payment plans - pay as you go and not a lump sum.</li>
                  <li>
                    Focus on bike learning, addressing the gap in traditional
                    driving schools.
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-full md:max-w-xl mt-4 md:mt-0">
              <img
                src={myImg}
                alt="Ahen DriveTech"
                className="rounded-lg shadow-lg smaller-image"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-8 space-y-8 md:space-y-0 md:space-x-8">
            <div className="mt-6 space-y-8">
              <div className="about-cards">
                <div className="about-card ourVision border border-white">
                  <div className="text-lg">
                    <h3 className="font-bold mb-2 text-center">Our Vision</h3>
                    <p>
                      Ahen, India's leading driving school, tackles common
                      issues in driver education by offering affordable
                      classes at Rs.100.
                    </p>
                  </div>
                </div>

                <div className="about-card features border border-white">
                  <div className=" text-lg">
                    <h3 className="font-bold mb-2 text-center">Features of Ahen</h3>
                    <ul className="list-disc list-inside text-left">
                      <li>Home pickup and drop facility.</li>
                      <li>Emphasis on bike learning.</li>
                      <li>Various learning options: Car, Bike, Rickshaw, etc.</li>
                      <li>Flexible payment plans.</li>
                    </ul>
                  </div>
                </div>

                <div className="about-card service border border-white">
                  <div className=" text-lg">
                    <h3 className="font-bold mb-2 text-center">Service Availability</h3>
                    <ul className="list-disc list-inside ">
                      <li>Pune: 150 services</li>
                      <li>Mumbai: 40 services</li>
                      <li>Bangalore: 20 services</li>
                    </ul>
                  </div>
                </div>

                <div className="about-card customerCare border border-white">
                  <div className=" text-lg">
                    <h3 className="font-bold mb-2 text-center">Customer Care</h3>
                    <p>
                      Ahen is committed to customer satisfaction. We provide 24×7 feedback service. So, our customers can contact us without any problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 italic">
            "Join the Ahen Revolution! <br /> An innovative solution to traditional driving school challenges."
          </p>
        </div>
      </div>
    </div>
  );
}
