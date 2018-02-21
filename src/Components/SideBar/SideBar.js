import React, { Component } from 'react';
import refreshIcon from '../../../src/refresh.svg';
import settingsIcon from '../../../src/settings.svg';
import './sideBar.css';

class Header extends Component {
  render() {
    return (
      <div className="sidebar-container" >
        <img src={refreshIcon} alt="refresh" height="42" width="42" className="sidebar-refresh" />
        <img src={settingsIcon} alt="refresh" height="42" width="42" className="sidebar-settings" />
      </div>
    );
  }
}

export default Header;
