import React from "react";

import { NavLink } from "react-router-dom";

import "./navbar.scss";
import logo from '../../images/logo.png'

import  CartLink from "../CartLink"



export const Navbar = props => {
  

  return (
    <div>
      <nav className='topNavbar d-flex justify-content-between'>
        <div><img src={logo} alt='logo AlexCompany'/></div>
        <div className="navLinks">
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
          <CartLink />
        </div>
      </nav>
    </div>
  );
  
};
