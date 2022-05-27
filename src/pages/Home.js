import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import Categories from '../components/Categories';

export default class Home extends React.Component {
    state = {
      productsList: [],
      product: '',
      categoryId: '',
    }

    addToCart = (name, image, price, id) => {
      const product = { name, image, price, quantify: 1, id };
      const getCartProducts = JSON.parse(localStorage.getItem('cartItems'));
      if (!getCartProducts) {
        localStorage.setItem('cartItems', JSON.stringify([product]));
      }
      if (getCartProducts) {
        const obj = getCartProducts.find((item) => item.id === id);
        if (obj) {
          const newCartItems = getCartProducts.filter((item) => item.id !== id);
          const quantify = obj.quantify + 1;
          obj.quantify = quantify;
          newCartItems.push(obj);
          localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        } else {
          localStorage
            .setItem('cartItems', JSON.stringify([...getCartProducts, product]));
        }
      }
    }

    handleChange = ({ target }) => {
      const { value } = target;
      this.setState({ product: value });
    }

    handleChangeCategory = ({ target }) => {
      const { value } = target;
      this.setState({ categoryId: value, product: '' }, () => this.searchProducts());
    }

    searchProducts = async () => {
      const { product, categoryId } = this.state;
      const productsAPI = await getProductsFromCategoryAndQuery(categoryId, product);
      console.log(productsAPI);
      this.setState({ productsList: productsAPI.results });
    }

    render() {
      const { productsList } = this.state;
      return (
        <div>
          <header className="searchInputs">
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
            <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
          </header>

          <main className="productsList">
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
                    id={ product.id }
                    handleClick={ this.addToCart }
                  />))
              )}
          </main>

          <aside className="categories">
            <Categories onClick={ this.handleChangeCategory } />
          </aside>
        </div>
      );
    }
}
