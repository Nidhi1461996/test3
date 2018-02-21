import React, { Component } from 'react';

import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-main">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51VNlzbfpXL._SX331_BO1%2C204%2C203%2C200_.jpg" alt="movie" className="card-image" />
          <div className="card-body">
            {this.props.bookName}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
