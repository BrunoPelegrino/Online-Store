import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  state = {
    categories: [],
  }

  componentDidMount = async () => {
    const getList = await getCategories();
    this.setState({ categories: getList });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <div className="category" key={ category.name }>
            <label
              data-testid="category"
              htmlFor={ category.id }
              name="category"
            >
              {category.name}
              <input
                type="radio"
                id={ category.id }
                value={ category.id }
                name="category"
                onClick={ onClick }
              />
            </label>
          </div>))}
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
