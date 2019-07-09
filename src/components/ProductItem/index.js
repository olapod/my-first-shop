import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/actions-cart';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from '../../data/data.json';
import './productItem.scss';

export class ProductItem extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClick = (id)=>{
    this.handleShow();
    this.props.addToCart(id);
}

  render() {
    const found = data.find(x => x.id === parseFloat(this.props.id));

    return <div className='product-item-wrapper'>
        <h3>Opis książki</h3>
        <span><img className='product-photo' src={found.imgurl} alt='Book about something'/></span>
        <h3 className='title'>Tytuł: {found.title}</h3>
        <h4 className='author'>Autor: {found.author}</h4>
        <span>Opis: {found.description}</span>
        <span>Cena: {found.price} zł</span>
        <Button onClick={()=>this.handleClick(found.id)}>Dodaj do koszyka</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dodano produkt do koszyka</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Dodano książkę '{found.title}'</span>
            <span><img className='product-photo-modal' src={found.imgurl} alt='Book about something'/></span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
            Zamknij
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  }
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)