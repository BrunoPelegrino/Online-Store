import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    state = {
      initMessage: '',
    }

    // requisito 03
    render() {
      const { initMessage } = this.state;
      return (
        <div>
          <input
            type="text"
            placeholder="digite sua busca"
          />
          {initMessage}
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
        </div>
      );
    }
}
