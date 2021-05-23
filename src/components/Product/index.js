import { Component } from 'react'
import './style.css';

export default class Product extends Component {

  handleClick = (evt) => {
    this.props.funcClick(Number(evt.target.id));
  }

  render() {
    const { elm } = this.props;
    return (
      <div className='product' key={elm.id}>
        <div> {elm.name}</div>
        <div> Categoria: {elm.category}</div>
        <div>
          {`Preço: ${elm.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
        </div>
        {this.props.btnAdd && <button id={elm.id} onClick={this.handleClick}>Add</button>}
      </div>
    );
  }
}