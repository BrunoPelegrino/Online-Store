import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { name, price, image } = this.props;
    return (
      <div className="Card" data-testid="product">
        <p>{ name }</p>
        <img src={ image } alt="produto" />
        <span>{ price }</span>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
