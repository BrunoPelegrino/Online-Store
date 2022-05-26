import React from 'react';

export default class Cart extends React.Component {
  state = {
    cartItems: [],
  }

  componentDidMount() {
    const getCartProducts = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartItems: getCartProducts });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {(!cartItems || cartItems.length === 0)
          ? (
            <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>)
          : (
            <div>
              <p data-testid="shopping-cart-product-quantity">{ cartItems.length }</p>
              {cartItems.map((cartItem, index) => (
                <div
                  key={ index }
                  className="cartItem"
                >
                  <p data-testid="shopping-cart-product-name">{ cartItem.name }</p>
                  <img src={ cartItem.image } alt="produto" />
                  <span>{ cartItem.price }</span>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}
