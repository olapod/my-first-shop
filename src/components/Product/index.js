import React from 'react';
import { Link } from 'react-router-dom';
import './product.scss'

const Product = props => {
  return (
    <Link
      to={`/produkt/${props.id}`}
      key={`produkt-${props.id}`}
      id={`produkt-${props.id}`}
      {...props}
    >
      <div className='product-wrapper' style={{
        backgroundImage: `url(${props.imgurl})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
      }}>
      </div>
      <div className='product-info-wrapper'>
        <span className='product-name'>Tytuł: {props.title}</span>
        <span className='product-author'>Autor: {props.author}</span>
        <span className='product-price '>Cena: {props.price} zł</span>
        <span className={'product-old-price ' + ((props.old_price) ? 'show' : 'hidden')}>Stara cena: {props.old_price} zł</span>
        <span className={'product-info ' + ((props.info[0]) ? 'show' : 'hidden')}>{props.info[0]}!!!</span>
        <span className={'product-info ' + ((props.info[1]) ? 'show' : 'hidden')}>{props.info[1]}!!!</span>
      </div>
    </Link>
  );
};

export default Product;




