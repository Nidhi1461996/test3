import React, { Component } from 'react';
import Card from '../Card/Card';
import './cardHolder.css';

class Cardholder extends Component {
  render() {
    return (
      <div className="cardholder-container" >
        <div className="cardholder-header">
          JK Rowling
        </div>
        <div className="cardholder-body">
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Cardholder;
