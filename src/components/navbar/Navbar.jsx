import React, { useState } from "react";
import { Link } from "react-router-dom";
import MisaakaLogo from "../../assets/MISAAKA LOGO3.svg";
import "./Navbar.css";

const Navbar = () => {
  const [toggleClass, setToggleClass] = useState(false);

  return (
    <nav className="header">
      <div className="logo">
        <img className="logo-img" src={MisaakaLogo} alt="" width="50px" />
        <span className="logo-title">Misaaka Collection</span>
      </div>
      <ul className={!toggleClass ? "nav-links" : "nav-links-active"}>
        <Link to="/" onClick={()=>setToggleClass(false)}>
          <li>
           Home
          </li>
        </Link>
        <Link to="/products"  onClick={()=>setToggleClass(false)}>
          <li>
            Products
          </li>
        </Link>
        <Link to="/FAQ"  onClick={()=>setToggleClass(false)}>
          <li>
            FAQ
          </li>
        </Link>
        <Link to="/about"  onClick={()=>setToggleClass(false)}>
          <li>
            About Me
          </li>
        </Link>
        <Link to="/contact"  onClick={()=>setToggleClass(false)}>
          <li>
           Contact
          </li>
        </Link>
      </ul>
      <div
        className={!toggleClass ? "burger" : "nav-active"}
        onClick={() => setToggleClass(!toggleClass)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
