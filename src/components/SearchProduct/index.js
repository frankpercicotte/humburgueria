import { Component } from 'react'
import './style.css';

export default class SearchProduct extends Component {
  state = {
    search: '',
  }

  btnSearchProduct = () => {
    this.props.funcSearch(this.state.search);
    this.setState({ search: '' });
  }

  changeHandler = (evt) => {
    this.setState({ search: evt.target.value });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          autoFocus={true}
          value={this.state.search}
          onChange={this.changeHandler}
        />
        <input
          className="btn"
          type='button'
          value='Search Product'
          onClick={() => {
            this.btnSearchProduct();
          }} />
      </div>
    );
  }
}