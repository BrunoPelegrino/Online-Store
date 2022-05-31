import React from 'react';
import PropTypes from 'prop-types';
import { getCartItem, saveCartItem } from '../services/storageItems';

class ButonAddCart extends React.Component {
    addToCart = () => {
      const { available_quantity, name, price, thumbnail, getCartLength } = this.props;
      const getCartProducts = getCartItem();
      if (!getCartProducts) {
        saveCartItem([{ available_quantity, name, price, thumbnail, quantify: 1 }]);
      }
      if (getCartProducts) {
        const obj = getCartProducts.find((item) => item.name === name);
        if (obj) {
          const newCartItems = getCartProducts.filter((item) => item.name !== name);
          const quantify = obj.quantify + 1;
          obj.quantify = quantify;
          newCartItems.push(obj);
          saveCartItem(newCartItems);
        } else {
          const newProduct = getCartItem();
          saveCartItem([
            ...newProduct, { available_quantity, name, price, thumbnail, quantify: 1 }]);
        }
      }
      getCartLength();
    }

    render() {
      const { rotuloId } = this.props;
      return (
        <button
          type="submit"
          onClick={ this.addToCart }
          data-testid={ rotuloId }
        >
          Adicionar ao carrinho
        </button>
      );
    }
}

export default ButonAddCart;

ButonAddCart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  available_quantity: PropTypes.number.isRequired,
  rotuloId: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  getCartLength: PropTypes.func.isRequired,
};
