import React, { Component } from 'react';
import ProductList from '../ProductList';
import Button from 'react-bootstrap/Button';
import './home.scss';
import data from '../../data/data.json';


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: 'asc'
    };
    this.sortBy = this.sortByPrice.bind(this);
  }

  sortByPrice(direction) {
    this.setState({
      data: data.sort((a, b) => {
        if (direction === 'asc') {
          return parseFloat(a['price']) - parseFloat(b['price'])
        } else if (direction === 'desc') {
          return parseFloat(b['price']) - parseFloat(a['price'])
        } else {
          return 0;
        }
      })
    });
}

sortByTitle(direction) {
  this.setState({
    data: data.sort((a, b) => {
      if (direction === 'asc') {
        return a['title'].localeCompare(b['title'])
      } else if (direction === 'desc') {
        return b['title'].localeCompare(a['title'])
      } else {
        return 0;
      }
    })
  });
}

  render() {

    return <div className='products-display d-flex justify-content-between'>
      <div className='sortList'>
        <h3>Sortuj</h3>
        <Button onClick={() => this.sortByTitle('asc')}>Tytuł A-Z</Button>
        <Button onClick={() => this.sortByTitle('desc')}>Tytuł Z-A</Button>
        <Button onClick={() => this.sortByPrice('asc')}>Cena rosnąco</Button>
        <Button onClick={() => this.sortByPrice('desc')}>Cena malejąco</Button>
      </div>

      <div className='productList'>
        <h3>Lista książek</h3>
        <ProductList data={this.state.data} />
      </div>

      </div>
  }
}

