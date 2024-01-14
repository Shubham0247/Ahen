// import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.png";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen home-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 lg:p-10">
        <div className="slogan">
          <h1>Go Ahed</h1>
          <h1>With Ahen</h1>
        </div>
        <div className="description">
          <p>
            Ahen, India&apos;s leading driving school, tackles common issues in
            driver education by offering affordable classes at Rs.100. With home
            services, flexible payments, and a focus on bike learning, Ahen aims
            to be the nation&apos;s top choice for quality and convenience in
            driving education.
          </p>
          <button className="download-button">
            <span className="download-button_lg">
              <span className="download-button_sl"></span>

              <Link to="/about" className="download-button_text text-white">
                Explore more
              </Link>
            </span>
          </button>
        </div>
      </div>

      <div className="slider lg:w-1/2">
        <img className="mySlides hidden lg:block" src={img1} />
        <img className="mySlides hidden lg:block" src={img2} />
        <img className="mySlides hidden lg:block" src={img3} />
        <img className="mySlides hidden lg:block" src={img4} />
        <img className="mySlides hidden lg:block" src={img5} />
      </div>
    </div>
  );
}
