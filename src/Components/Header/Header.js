import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container" >

        <p className="header-title">The
          <span className="header-title-span">Book </span>
          Shelf
        </p>


      </div>
    );
  }
}

export default Header;
