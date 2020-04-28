import React from "react";
import { NavLink } from "react-router-dom";

import MovieIcon from "@material-ui/icons/Movie";

const Navbar = () => (
  <div className="navbar-container">
    <div>
      <NavLink to="/" exact activeClassName="nav-active">
        <MovieIcon fontSize="small" />
      </NavLink>
    </div>
    <div className="navbar-items">
      <div>
        <NavLink to="/top" activeClassName="nav-active">
          <span>.</span>top rated
        </NavLink>
      </div>
      <div>
        <NavLink to="/search" activeClassName="nav-active">
          <span>.</span>search
        </NavLink>
      </div>
    </div>
  </div>
);

export default Navbar;
