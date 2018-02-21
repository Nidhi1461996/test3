import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import CardHolder from './Components/CardHolder/CardHolder';

class App extends Component {
  render() {
    return (
      <div className="container" >
        <div>
          <SideBar />
          <Header />
          <CardHolder />
        </div>
      </div>
    );
  }
}

export default App;
