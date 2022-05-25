import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

export default class Details extends React.Component {
  // requisito 07
  state = {
    name: '',
    price: '',
    image: '',
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const product = await getProduct(id);
    console.log(product);
    this.setState({
      image: product.thumbnail,
      name: product.title,
      price: product.price,
    });
  }

  render() {
    const { name, image, price } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{name}</h1>
        <img src={ image } alt={ name } />
        <span>{price}</span>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
