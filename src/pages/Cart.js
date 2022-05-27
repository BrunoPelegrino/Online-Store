import React from 'react';
import { getCartItem } from '../services/storageItems';

export default class Cart extends React.Component {
state = {
  productItem: [],
  isEmpty: true,
  amount: 1,
}

componentDidMount() {
  this.checkedLocalStorage();
}

checkedLocalStorage = async () => {
  // const { productItem } = this.state;
  const items = await getCartItem();
  console.log(items.title);
  if (items.length !== 0) this.setState({ productItem: items, isEmpty: false });
}

render() {
  const { productItem, isEmpty, amount } = this.state;
  return (
    <div>
      {!isEmpty
        ? (productItem.map((item) => (
          <div key={ item }>
            <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
            <h3>{ item.price }</h3>
            <h3 data-testid="shopping-cart-product-quantity">{ amount }</h3>

          </div>
        ))
        )
        : (<h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>)}
    </div>
  );
}
}
