import React from "react";
import "../styles/Navbar.css";
import { FaCoins } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          Coin <span className="purple">Search</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
