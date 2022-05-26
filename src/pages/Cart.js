import React from 'react';

export default class Cart extends React.Component {
  state = {
    cartItems: [],
  }

  componentDidMount = async () => {
    const getCartProducts = await JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartItems: getCartProducts });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
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
    );
  }
}
