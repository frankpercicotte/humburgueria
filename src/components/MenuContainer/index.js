import { Component } from 'react';
import Product from '../Product';
import './style.css';

export default class MenuContainer extends Component {

  render() {
    return (
      <div>
        {this.props.products.map((elm, idx) => {
          return (
            <div className='products' key={idx}>
              <Product elm={elm} funcClick={this.props.funcClick} btnAdd={this.props.btnAdd} />
            </div>
          )
        }
        )}
      </div>

    );
  }

}