import React from 'react';
import PropTypes from 'prop-types';

class FormComments extends React.Component {
  state = {
    emailUser: '',
    stars: '',
    comment: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveComments = () => {
    const { emailUser, comment, stars } = this.state;
    const { updateComments, id } = this.props;
    const savedComments = JSON.parse(localStorage.getItem([id]));
    if (!savedComments) {
      localStorage
        .setItem([id], JSON.stringify([{ emailUser, comment, stars }]));
      this.setState({ emailUser: '', stars: '', comment: '' });
    } else {
      localStorage
        .setItem([id],
          JSON.stringify([...savedComments, { emailUser, comment, stars }]));
      this.setState({ emailUser: '', stars: '', comment: '' });
    }
    updateComments(id);
  }

  render() {
    const { emailUser, comment } = this.state;
    const five = ['1', '2', '3', '4', '5'];
    return (
      <form>
        <input
          type="email"
          name="emailUser"
          value={ emailUser }
          data-testid="product-detail-email"
          placeholder="Email:"
          onChange={ this.handleChange }
        />
        <div>
          { five.map((num) => (
            <button
              type="button"
              key={ `${num}-rating` }
              name="stars"
              value={ num }
              data-testid={ `${num}-rating` }
              onClick={ this.handleChange }
            >
              {num}
            </button>
          ))}
        </div>
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Avalie o produto"
          name="comment"
          value={ comment }
          onChange={ this.handleChange }
        />
        <button
          data-testid="submit-review-btn"
          type="button"
          onClick={ this.saveComments }
        >
          Salvar
        </button>
      </form>
    );
  }
}

FormComments.propTypes = {
  updateComments: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default FormComments;
