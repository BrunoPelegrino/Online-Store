import React from 'react';

export default class Home extends React.Component {
    state = {
      initMessage: '',
    }

    // isEmpty({ target }) {
    //   const { value } = target;
    //   if(value.length > 0){

    //   }
    // }

    render() {
      const { initMessage } = this.state;
      return (
        <div>
          <input
            type="text"
            placeholder="digite sua busca"
            // onChange={ () => this.isEmpty(e) }
          />
          {initMessage}
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.

          </p>
        </div>
      );
    }
}
