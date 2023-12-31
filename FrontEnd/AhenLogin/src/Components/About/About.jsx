import "./About.css";
import myImg from "../images/ahenimg.jpg";

export default function About() {
  return (
    <div className="py-16">
      <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/5 lg:w-5/5 overflow-hidden rounded-lg">
            <img src={myImg} alt="image" />
          </div>

          <div className="md:w-7/12 lg:w-6/12 mx-auto ">
            {/* <h2 className="text-4xl md:text-4xl font-bold text-white text-center ">
              Welcome to Ahen Driving School
            </h2> */}

            <div className="welcome text-4xl md:text-4xl font-bold text-center">
              <h3>Welcome to Ahen Driving School</h3>
            </div>
            <div className="mt-6 space-y-8">
              <div className="about-cards">
                <div className="about-card red border border-white">
                  <h3 className="tip text-white">Our Vision</h3>
                  <p className="second-text text-justify text-white">
                    Ahen is a driving class booking application where you can
                    learn driving for just Rs.100. Ahen aims to provide quality
                    driving classes with various facilities, including home
                    pickup and drop services, flexible payment plans, and
                    options for learning different vehicles such as bikes, cars,
                    and rickshaws.
                  </p>
                </div>

                <div className="about-card blue border border-white">
                  <h3 className="tip text-white">Problems We Solve</h3>
                  <ol className="second-text list-disc pl-8 text-justify text-white">
                    <li>
                      Going to the driving school every day can be inconvenient.
                    </li>
                    <li>
                      Unfair payment structures, especially for those with some
                      driving knowledge.
                    </li>
                    <li>
                      Bike learning is rarely emphasized due to high pricing and
                      other reasons.
                    </li>
                  </ol>
                </div>

                <div className="about-card green border border-white">
                  <h3 className="tip text-white">Solutions We Provide</h3>
                  <p className="second-text text-justify text-white">
                    Ahen addresses these problems, making it India&aps;s next
                    biggest driving school chain. Our features include home
                    pickup and drop services, a focus on bike learning, various
                    vehicle options, and flexible payment plans.
                  </p>
                </div>

                <div className="about-card orange border border-white">
                  <h3 className="tip text-white">Customer Care</h3>
                  <p className="second-text text-justify text-white">
                    Although we are new, we provide experienced teachers to
                    ensure a smooth learning experience. Our 24x7 feedback
                    service allows customers to contact us anytime without any
                    hassle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
