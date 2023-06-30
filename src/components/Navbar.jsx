import React from "react";
import "../styles/Navbar.css";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1 className="navbar-heading">
          <span className="purple">CryptoVault</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
