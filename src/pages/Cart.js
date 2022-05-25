import React from 'react';

export default class Cart extends React.Component {
  // requisito 03
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}
