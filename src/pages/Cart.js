import React from 'react';
import { Link } from 'react-router-dom';
import { saveCartItem, getCartItem } from '../services/storageItems';

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
    const { cartItems } = this.state;
    const newQtd = cartItems.find((item) => item.name === name);
    newQtd.quantify += 1;
    this.setState({ cartItems });
    saveCartItem(cartItems);
  }

  decreaseQuantify = (event) => {
    const { name } = event.target;
    const { cartItems } = this.state;
    const newQtd = cartItems.find((item) => item.name === name);
    if (newQtd.quantify === 1) return 1;
    newQtd.quantify -= 1;
    this.setState({ cartItems });
    saveCartItem(cartItems);
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
                    name={ name }
                    onClick={ (event) => this.decreaseQuantify(event) }
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
