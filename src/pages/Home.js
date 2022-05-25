import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import Categories from '../components/Categories';

export default class Home extends React.Component {
    state = {
      productsList: [],
      product: '',
    }

    handleChange = ({ target }) => {
      const { value } = target;
      this.setState({ product: value });
    }

    searchProducts = async () => {
      const { product } = this.state;
      const productsAPI = await getProductsFromCategoryAndQuery(product);
      console.log(productsAPI);
      this.setState({ productsList: productsAPI.results });
    }

    render() {
      const { productsList } = this.state;
      console.log(productsList);
      return (
        <div>
          <input
            type="text"
            placeholder="digite sua busca"
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.searchProducts }
          >
            Pesquisar
          </button>

          {productsList.length === 0 && (
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.

            </p>
          )}
          {productsList.length === 0 ? (
            <p>
              Nenhum produto foi encontrado.
            </p>
          )
            : (
              productsList.map((product, key) => (
                <Card
                  key={ key }
                  name={ product.title }
                  image={ product.thumbnail }
                  price={ product.price }
                />))
            )}
          <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
          <Categories />
        </div>
      );
    }
}
