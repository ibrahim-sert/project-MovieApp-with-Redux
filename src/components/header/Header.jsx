import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"> Movie App</div>
      </Link>
      <div className="user-image">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;