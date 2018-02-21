import React, { Component } from 'react';
import settingsIcon from '../../../src/settings.svg';
import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-main">
          <img src={settingsIcon} alt="movie" className="card-image" />
          <div className="card-body">
            Harry Potter
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
