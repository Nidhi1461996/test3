import React, { Component } from 'react';
import refreshIcon from '../../../src/refresh.svg';
import './sideBar.css';

class Header extends Component {
  render() {
    return (
      <div className="sidebar-container" >
        <img src={refreshIcon} alt="refresh" height="42" width="42" className="sidebar-refresh" />
      </div>
    );
  }
}

export default Header;
