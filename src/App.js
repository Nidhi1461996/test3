import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="container" >
        <div>
          <SideBar />
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
