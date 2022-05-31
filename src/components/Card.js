import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { name, price, image, id, shipping } = this.props;
    return (
      <div
        className="Card"
        data-testid="product"
      >
        <Link to={ `/details/${id}` } data-testid="product-detail-link">
          <p data-testid="shopping-cart-product-name">{ name }</p>
          <img src={ image } alt="produto" />
          <span>{ price }</span>
        </Link>
        {shipping && <p data-testid="free-shipping">Frete Grátis</p>}
      </div>
    );
  }
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  shipping: PropTypes.bool.isRequired,
};
export default Card;
