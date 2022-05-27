import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { name, price, image, id, handleClick } = this.props;
    return (
      <div
        className="Card"
        data-testid="product"
      >
        <Link to={ `/details/${id}` } data-testid="product-detail-link">
          <p>{ name }</p>
          <img src={ image } alt="produto" />
          <span>{ price }</span>
        </Link>
        <button
          onClick={ () => handleClick(name, image, price, id) }
          data-testid="product-add-to-cart"
          type="button"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
