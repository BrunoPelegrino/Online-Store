import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProduct } from '../services/api';
import { saveCartItem } from '../services/storageItems';

export default class Details extends React.Component {
  // requisito 07
  state = {
    name: '',
    price: '',
    image: '',
    productItem: [],
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const product = await getProduct(id);
    // console.log(product);
    this.setState({
      image: product.thumbnail,
      name: product.title,
      price: product.price,
      productItem: product,
    });
  }

  handleAddCartItem = () => {
    const { productItem } = this.state;
    console.log(productItem);
    saveCartItem(productItem);
  }

  render() {
    const { name, image, price } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <h1 data-testid="product-detail-name">{name}</h1>
        <img src={ image } alt={ name } />
        <span>{price}</span>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleAddCartItem }
        >
          Adicionar ao Carrinho

        </button>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
