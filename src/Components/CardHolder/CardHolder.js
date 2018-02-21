import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './cardHolder.css';

class Cardholder extends Component {
  render() {
    let count = 0;
    const cardElements = this.props.books
      .map(book => (<Card
        key={count++}
        bookName={book.name}
      />));
    return (
      <div className="cardholder-container" >
        <div className="cardholder-header">
          JK Rowling
        </div>
        <div className="cardholder-body" >
          {cardElements}
        </div>
      </div>
    );
  }
}
Cardholder.defaultProps = {
  books: [],

};

Cardholder.propTypes = {
  books: PropTypes.arrayOf(Object),
};

export default Cardholder;
