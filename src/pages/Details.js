import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProduct } from '../services/api';
import ButonAddCart from '../components/ButonAddCart';

export default class Details extends React.Component {
  state = {
    product: [],
    comments: [],
    cartItems: 0,
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.updateComments(id);
    this.getCartLength();
    const product = await getProduct(id);
    this.setState({
      product,
    });
  }

  getCartLength = () => {
    const cartProducts = getCartItem();
    if (cartProducts) {
      const cartItems = cartProducts.reduce((acc, item) => acc + item.quantify, 0);
      this.setState({ cartItems });
    }
  }

  // updateCartLength = () => {
  //   const cartProducts = getCartItem();
  //   if (cartProducts) {
  //     const cartItems = cartProducts.reduce((acc, item) => acc + item.quantify, 0);
  //     return cartItems;
  //   }
  // }

  updateComments = (id) => {
    const comments = JSON.parse(localStorage.getItem([id]));
    this.setState({ comments });
  }

  render() {
    const { product, cartItems, comments } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Link to="/">Home</Link>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <span>
          Valor: R$
          {price}
        </span>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <ButonAddCart
          name={ title }
          price={ price }
          thumbnail={ thumbnail }
          rotuloId="product-detail-add-to-cart"
        />
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
