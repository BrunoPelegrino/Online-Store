import React from 'react';
import { Link } from 'react-router-dom';
import { getCartItem } from '../services/storageItems';

export default class Cart extends React.Component {
  state = {
    cartItems: [],
  }

  async componentDidMount() {
    const getCartProducts = await getCartItem();
    if (!getCartProducts) this.setState([]);
    this.setState({ cartItems: getCartProducts });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        {(!cartItems || cartItems.length === 0)
          ? (
            <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>)
          : (
            <div>
              {cartItems.map((cartItem, index) => (
                <div
                  key={ index }
                  className="cartItem"
                >
                  <p data-testid="shopping-cart-product-name">{ cartItem.name }</p>
                  <img src={ cartItem.thumbnail } alt="produto" />
                  <span>{ cartItem.price }</span>
                  <p data-testid="shopping-cart-product-quantity">
                    { cartItem.quantify }
                  </p>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}
