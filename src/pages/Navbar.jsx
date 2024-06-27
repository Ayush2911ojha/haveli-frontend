import React, { useState } from "react";
import { Link } from "react-router-dom";



export default function Navbar() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="container-fluid bg-gray-50 ">
        <div className="row mx-0">
          <div className="lg:w-1/4 bg-dark hidden lg:flex items-center justify-center">
            <Link
              to="/"
              className="w-full h-full m-0 p-0 flex items-center justify-center"
            >
              <h1 className="m-0 text-primary uppercase">Haweli24</h1>
            </Link>
          </div>
          <div className="lg:w-3/4">
            <nav className="bg-dark p-3 lg:p-0 flex items-center justify-between">
              <Link to="/" className="block lg:hidden">
                <h1 className="m-0 text-primary uppercase">Haweli24</h1>
              </Link>
              <button
                type="button"
                className="navbar-toggler lg:hidden"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`${
                  navbarCollapse
                    ? "flex flex-col lg:flex-row items-center lg:items-start"
                    : "hidden lg:flex flex-col lg:flex-row items-center lg:items-start"
                } justify-around w-full`}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start py-0">
                  <ul className="flex gap-10">
                    
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/about'}><li>About</li> </Link>
                    <Link to={'/services'}> <li>Services</li></Link>
                    <Link to={'/hotelsList'}><li>Browse Hotels</li></Link>
                    <Link to={'/'}><li>Contact</li></Link>
                </ul>
                </div>
              
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
