import './App.css';
import { Component } from 'react';
import SearchProduct from './components/SearchProduct';
import MenuContainer from './components/MenuContainer';
import TotalSale from './components/TotalSale';

class App extends Component {

  state = {
    products: [
      { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
      { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
      { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
      { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
      { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
      { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
      { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
    ],
    filteredProducts: [],
    currentSale: { total: 0, saleDetails: [] },

  }


  componentDidMount() {
    this.showProducts('');
  }


  showProducts = (txtProductSearch) => {
    const { products } = this.state;
    const filterProduct = [...products].filter(elm =>
      elm.name.toLowerCase().includes(txtProductSearch.toLowerCase()));

    this.setState({ filteredProducts: filterProduct });
    this.toogleBtnSearch();
  }


  toogleBtnSearch = () => {
    const { btnSearch } = this.state;
    this.setState({ btnSearch: !btnSearch })
  }


  handleClick = (productId) => {
    const { products, currentSale } = this.state;
    const { saleDetails } = currentSale;

    const sales = [...products].filter(elm => {
      return (JSON.stringify(elm.id) === JSON.stringify(productId))
    })

    this.setState({ currentSale: { ...currentSale, saleDetails: [...saleDetails, ...sales] } })
    this.showProducts('');

  }


  render() {
    const { filteredProducts, currentSale } = this.state;

    return (
      <div className="App">
        <div>
          <SearchProduct funcSearch={this.showProducts} btn={false} />
          {filteredProducts.length &&
            <MenuContainer products={filteredProducts} btnAdd={true} funcClick={this.handleClick} />
          }
        </div>
        <div style={{ color: 'blue' }}>
          <hr style={{ margin: '2vh', color: 'blue', backgroundColor:'purple' }} />
          Total:
          <TotalSale price={currentSale.saleDetails} />
          <MenuContainer products={currentSale.saleDetails} btnAdd={false} />

        </div>

      </div>
    );
  }
}

export default App;
