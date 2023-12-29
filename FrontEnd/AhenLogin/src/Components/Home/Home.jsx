// import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

export default function Home() {
  useEffect(() => {
    var slideIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {
        slideIndex = 1;
      }
      x[slideIndex - 1].style.display = "block";
      setTimeout(carousel, 2000);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div className="leftContainer">
        <div className="slogan">
          <h1 className="text-blue-950">Go Ahed</h1>
          <h1 className="text-blue-950">With Ahen</h1>
        </div>
        <div className="description">
          <p>
            Ahen, India&apos;s leading driving school, tackles common issues in
            driver education by offering affordable classes at Rs.100. With home
            services, flexible payments, and a focus on bike learning, Ahen aims
            to be the nation&apos;s top choice for quality and convenience in
            driving education.
          </p>
        </div>
      </div>
      <div className="slider">
        <img className="mySlides" src={img1} />
        <img className="mySlides" src={img2} />
        <img className="mySlides" src={img3} />
        <img className="mySlides" src={img4} />
      </div>
    </div>
  );
}
