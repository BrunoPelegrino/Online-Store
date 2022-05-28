import React from 'react';
import PropTypes from 'prop-types';
import { getCartItem, saveCartItem } from '../services/storageItems';

class ButonAddCart extends React.Component {
    addToCart = () => {
      const { name, price, thumbnail } = this.props;
      const quantify = 1;
      let getCartProducts = getCartItem();
      if (!getCartProducts) getCartProducts = [];
      const cartItem = [...getCartProducts, { name, price, thumbnail, quantify }];
      // console.log('Testando:', cartItem);
      saveCartItem(cartItem);
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
  rotuloId: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
