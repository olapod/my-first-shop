import React from "react";
import { NavLink } from "react-router-dom";
import  CartLink from "../CartLink"
import "./navbar.scss";
import logo from '../../images/logo.png';

export const Navbar = props => {
  return (
    <div className="navbar-container">
      <nav className='topNavbar d-flex justify-content-between'>
        <div><img className="logo-img" src={logo} alt='logo AlexCompany'/></div>
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


