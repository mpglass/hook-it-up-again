import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav justify-content-center p-3 shadow">
      <NavLink
        className="text-dark p-4 mx-3"
        activeClassName="text-info border-bottom border-top border-info" to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="text-dark p-4 mx-3"
        activeClassName="text-info border-bottom border-top border-info" to="/users"
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
