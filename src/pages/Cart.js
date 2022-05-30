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

  increaseQuantify = (event) => {
    const { name } = event.target;
    console.log(name);

    // const { cartItems } = this.state;
    // let checkQuantify = getCartItem();
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
              {cartItems.map(({ name, thumbnail, price, quantify }, index) => (
                <div
                  key={ index }
                  className="cartItem"
                >
                  <p data-testid="shopping-cart-product-name">{ name }</p>
                  <img src={ thumbnail } alt="produto" />
                  <span>{ price }</span>
                  <button
                    type="button"
                    name={ name }
                    onClick={ (event) => this.increaseQuantify(event) }
                    data-testid="product-increase-quantity"
                  >
                    +

                  </button>
                  <p data-testid="shopping-cart-product-quantity">
                    { quantify }
                  </p>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                  >
                    -

                  </button>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}
