import { Component } from 'react';

export default class TotalSale extends Component {

  render() {
    return (
      <>
        {
          ` ${this.props.price.reduce((acc, cur) => acc += cur.price, 0)
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
        }
      </>
    );
  }
}