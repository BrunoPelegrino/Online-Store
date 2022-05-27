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
    console.log(cartItems);
    return (
      <div>
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
                  <img src={ cartItem.image } alt="produto" />
                  <span>{ cartItem.price }</span>
                  <p
                    data-testid="shopping-cart-product-quantity"
                  >
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
