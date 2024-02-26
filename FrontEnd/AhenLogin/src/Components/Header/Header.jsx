import { useState } from 'react';
import { FaBars, FaPhoneAlt, FaUserAlt, FaMapMarkerAlt, FaChartBar, FaHome, FaCar} from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import myLogo from '../images/ahenlogo2.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="nav-background border-gray-200 px-4 lg:px-6 py-4">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link to="/" className="flex">
              <img src={myLogo} className="mr-3 h-12" alt="Logo" />
            </Link>
            <div className="bars lg:hidden ml-3 mt-2 mb-0">
              <FaBars 
                onClick={toggleSidebar}
                className={`transition-transform duration-300 ease-in-out transform ${
                  isOpen ? 'rotate-90' : 'rotate-0'
                }`}
              />
            </div>
          </div>
          <div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col w-full lg:flex lg:w-auto mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={'/'}
                  activeClassName="active"
                  className="flex items-center py-2 pr-4 pl-3 duration-200 text-blue-950 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0"
                >
                  <FaHome className="mr-2" /> <span className="font-bold">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/about'}
                  activeClassName="active"
                  className="flex items-center py-2 pr-4 pl-3 duration-200 text-blue-950 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0"
                >
                  <FaUserAlt className="mr-2" /> <span className="font-bold">About</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/contact'}
                  activeClassName="active"
                  className="flex items-center py-2 pr-4 pl-3 duration-200 text-blue-950 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0"
                >
                  <FaPhoneAlt className="mr-2"/> <span className="font-bold">Contact Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/location'}
                  activeClassName="active"
                  className="flex items-center py-2 pr-4 pl-3 duration-200 text-blue-950 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0"
                >
                  <FaMapMarkerAlt className="mr-2"/> <span className="font-bold">Location</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/service'}
                  activeClassName="active"
                  className="flex items-center py-2 pr-4 pl-3 duration-200 text-blue-950 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0"
                >
                  <FaCar className="mr-2" /> <span className="font-bold">Service</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/admin'}
                  activeClassName="active"
                  className="flex items-center py-2 pr-4 pl-3 duration-200 text-blue-950 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0"
                >
                  <FaChartBar className="mr-2"/> <span className="font-bold">Dashboard</span>
                </NavLink>
              </li>
              {/* Add more NavLink items here */}
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <Link
              to="/signin"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <span className="font-bold">Sign in</span>
            </Link>
            <Link
              to="/signup"
              className="text-white bg-blue-600 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <span className="font-bold">Get started</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// import { useState } from 'react';
// import { Link, NavLink } from "react-router-dom";
// import myLogo from "../images/ahenLogo2.png";
// import "./Header.css";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <header className="shadow sticky z-50 top-0">
//       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="max-w-screen-xl mx-auto">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <Link to="/" className="flex items-center">
//                 <img src={myLogo} className="mr-3 h-12" alt="Logo" />
//               </Link>
//               <button
//                 onClick={toggleSidebar}
//                 className="lg:hidden text-gray-800 focus:ring-4 focus:ring-gray-300 rounded-lg p-2 focus:outline-none"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               </button>
//             </div>
//             <div id="signin-signup" className="hidden lg:flex lg:order-2">
//               {/* Sign in and Get started buttons */}
//               <Link
//                 to="/signin"
//                 className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//               >
//                 Sign in
//               </Link>
//               <Link
//                 to="/signup"
//                 className="text-white bg-blue-600 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//               >
//                 Get started
//               </Link>
//             </div>
//           </div>
//           <div className={`lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
//             <ul className="mt-4 font-medium">
//               {/* Sidebar navigation links */}
//               <li>
//                 <NavLink
//                   to={"/"}
//                   className="block py-2 px-4 duration-200 text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-950"
//                   activeClassName="text-orange-600"
//                   onClick={toggleSidebar}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"/about"}
//                   className="block py-2 px-4 duration-200 text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-950"
//                   activeClassName="text-orange-600"
//                   onClick={toggleSidebar}
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"/contact"}
//                   className="block py-2 px-4 duration-200 text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-950"
//                   activeClassName="text-orange-600"
//                   onClick={toggleSidebar}
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"/location"}
//                   className="block py-2 px-4 duration-200 text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-950"
//                   activeClassName="text-orange-600"
//                   onClick={toggleSidebar}
//                 >
//                   Location
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"/service"}
//                   className="block py-2 px-4 duration-200 text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-950"
//                   activeClassName="text-orange-600"
//                   onClick={toggleSidebar}
//                 >
//                   Service
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"/admin"}
//                   className="block py-2 px-4 duration-200 text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-950"
//                   activeClassName="text-orange-600"
//                   onClick={toggleSidebar}
//                 >
//                   Dashboard
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
