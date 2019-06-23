import React from "react";
import { NavLink } from "react-router-dom";

import "./bottomNavbar.scss";

export const BottomNavbar = props => {
  return (
    <div>
      <nav className="bottomNavbar">
                
        <NavLink exact to="/home" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/FAQ" activeClassName="active">
          FAQ
        </NavLink>
        <NavLink exact to="/regulamin" activeClassName="active">
          Regulamin
        </NavLink>
        <NavLink exact to="/kontakt" activeClassName="active">
          Kontakt
        </NavLink>
        
        
      </nav>
    </div>
  );
};
