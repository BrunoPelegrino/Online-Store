import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { name, price, image, id } = this.props;
    return (
      <div>
        <Link to={ `/details/${id}` } data-testid="product-detail-link">
          <div
          // key={ key }
            className="Card"
            data-testid="product"
          >
            <p>{ name }</p>
            <img src={ image } alt="produto" />
            <span>{ price }</span>
          </div>

        </Link>

      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  // key: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
