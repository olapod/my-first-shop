import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './cartLink.scss'

const CartLink = props => {

  return (
    <NavLink
      className="link-nav shoppingCart"
      exact to="/koszyk"
    >
      <FontAwesomeIcon className="cart-icon" icon={faCartPlus}/>
      <span className={((props.totalItems !== 0) ? ' show' : ' hidden')}>{props.totalItems}</span>
    </NavLink>
  );
};

const mapStateToProps = (state)=>{
  return{
    totalItems: state.quantity
  }
}

export default connect(mapStateToProps)(CartLink)

