import myImg from "../images/ahenimg.jpg"

export default function About() {
  return (
    <div className="py-16">
      <div className="container m-auto px-6 text-black md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/5 lg:w-5/5 overflow-hidden rounded-lg">
            <img src={myImg} alt="image"  />
          </div>

          <div className="md:w-7/12 lg:w-6/12 mx-auto">
            <h2 className="text-4xl md:text-4xl font-bold text-black">
              Welcome to Ahen Driving School
            </h2>
            <div className="mt-6 space-y-8">
              {/* Vision Card */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-black">
                  Our Vision
                </h3>
                <p className="mt-4 text-black text-justify">
                  Ahen is a driving class booking application where you can
                  learn driving for just Rs.100. Ahen aims to provide quality
                  driving classes with various facilities, including home pickup
                  and drop services, flexible payment plans, and options for
                  learning different vehicles such as bikes, cars, and rickshaws.
                </p>
              </div>

              {/* Problems Card */}
              <div className="bg-gray-100 p-4 rounded-lg " >
                <h3 className="text-xl font-bold text-black">
                  Problems We Solve
                </h3>
                <ol className="list-disc pl-8 mt-4 text-black text-justify">
                  <li>Going to the driving school every day can be inconvenient.</li>
                  <li>Unfair payment structures, especially for those with some driving knowledge.</li>
                  <li>Bike learning is rarely emphasized due to high pricing and other reasons.</li>
                </ol>
              </div>

              {/* Solutions Card */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-black">
                  Solutions We Provide
                </h3>
                <p className="mt-4 text-black text-justify">
                  Ahen addresses these problems, making it India&apos;s next biggest
                  driving school chain. Our features include home pickup and drop
                  services, a focus on bike learning, various vehicle options, and
                  flexible payment plans.
                </p>
              </div>

              {/* Customer Care Card */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-black">
                  Customer Care
                </h3>
                <p className="mt-4 text-black text-justify">
                  Although we are new, we provide experienced teachers to ensure a
                  smooth learning experience. Our 24x7 feedback service allows
                  customers to contact us anytime without any hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

