import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import Categories from '../components/Categories';
// import { getCartItem, saveCartItem } from '../services/storageItems';
import ButonAddCart from '../components/ButonAddCart';
import { getCartItem } from '../services/storageItems';

export default class Home extends React.Component {
  state = {
    productsList: [],
    product: '',
    categoryId: '',
    cartItems: 0,
  }

  componentDidMount() {
    this.getCartLength();
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
    this.setState({ productsList: productsAPI.results });
  }

  getCartLength = () => {
    const cartProducts = getCartItem();
    if (cartProducts) {
      const cartItems = cartProducts.reduce((acc, item) => acc + item.quantify, 0);
      this.setState({ cartItems });
    }
  }

  render() {
    const { productsList, cartItems } = this.state;
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
          <div>
            <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
            {cartItems && (
              <p data-testid="shopping-cart-size">{ cartItems }</p>
            )}
          </div>
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
                <div key={ key }>
                  <Card
                    name={ product.title }
                    image={ product.thumbnail }
                    price={ product.price }
                    id={ product.id }
                    shipping={ product.shipping.free_shipping }
                  />
                  <ButonAddCart
                    name={ product.title }
                    price={ product.price }
                    available_quantity={ product.available_quantity }
                    thumbnail={ product.thumbnail }
                    rotuloId="product-add-to-cart"
                    getCartLength={ this.getCartLength }
                  />
                </div>
              ))
            )}
        </main>
        <aside className="categories">
          <Categories onClick={ this.handleChangeCategory } />
        </aside>
      </div>
    );
  }
}
