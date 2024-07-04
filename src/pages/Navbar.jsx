import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
      <div className="upperlayer mb-10">
        <Link to={'/'}><h1 className="logo">Haweli24</h1></Link>
        <div className={`item ${isOpen ? 'active' : ''}`}>
            <ul className="items" onClick={toggleMenu}>    
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About</li> </Link>
                <Link to={'/services'}> <li>Services</li></Link>
                <Link to={'/hotelsList'}><li>Browse Hotels</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
                <Link to={'/login'}><button>Login</button></Link>
            </ul>
        </div>
      <button class="menu-toggle" onClick={toggleMenu}>☰</button>
      </div>
    </>
  );
}