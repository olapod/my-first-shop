import React, { Component } from 'react';
import { Navbar } from '../Navbar/index.js';
import { BottomNavbar } from '../BottomNavbar/index.js';
import './mainLayout.scss'

export class MainLayout extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar />
        {this.props.children}
        <div className='footer d-flex justify-content-between'>
          <div className='rights'>All rights reserved</div>
          <BottomNavbar />
        </div>
      </div>
    );
  }
}
