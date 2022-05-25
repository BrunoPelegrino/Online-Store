import React from 'react';
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
    return (
      <div>
        { categories.map((categorie) => (
          <label
            key={ categorie.name }
            data-testid="category"
            htmlFor="category"
            name="category"
          >
            {categorie.name}
            <input type="radio" name="category" />
          </label>))}
      </div>
    );
  }
}
export default Categories;
