import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav aria-label="menu principal">
        <ul>
          <li>
            <Link to="/">Pitça</Link>
          </li>
          <li>menu</li>
          <li>profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
