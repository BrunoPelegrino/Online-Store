import React from 'react';
import { getCartItem } from '../services/storageItems';

class Checkout extends React.Component {
  state = {
    cartItems: [],
  }

  componentDidMount() {
    const cart = getCartItem();
    console.log(cart);

    this.setState({
      cartItems: cart,
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <div>
          {cartItems.map((item) => (
            <div key={ item.name }>
              <p>{ item.name }</p>
              <p>{ item.price}</p>
              <p>{ item.quantify}</p>
              <img src={ item.thumbnail } alt={ item.name } />
            </div>
          ))}
        </div>
        <form>
          <label htmlFor="fullname">
            Nome Completo:
            <input data-testid="checkout-fullname" type="text" />
          </label>

          <label htmlFor="checkout-email">
            E-mail:
            <input data-testid="checkout-email" type="email" />

          </label>
          <label htmlFor="checkout-cpf">
            CPF:
            <input data-testid="checkout-cpf" type="text" />
          </label>

          <label htmlFor="checkout-phone">
            Telefone:
            <input data-testid="checkout-phone" type="text" />
          </label>

          <label htmlFor="checkout-cep">
            CEP:
            <input data-testid="checkout-cep" type="text" />
          </label>

          <label htmlFor="checkout-address">
            Endereço:
            <input data-testid="checkout-address" type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkout;
