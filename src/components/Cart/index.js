import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem,addQuantity,subtractQuantity} from '../../actions/actions-cart';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Recipe from '../Recipe';
import './cart.scss';


class Cart extends Component {

    //to remove the item completely
  handleRemove = (id)=>{
    this.props.removeItem(id);
  }
    //to add the quantity
  handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
  }
    //to substruct from the quantity
  handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
  }

  render(){
    let addedItems = this.props.items.length ?
      (
        <div className='container cart-container'>
          <div className='cart'>
            <h5>Zamówienie:</h5>
            <table className='collection'>
              <tbody>
                {this.props.items.map((item, index) =>{
                  return(
                    <tr className='collection-item ' key={index}>
                      <td><img src={item.imgurl} alt={item.imgurl}/></td>
                      <td>Tytuł: {item.title}</td>
                      <td>Cena: {item.price} zł</td>
                      <td>
                        <div className="itemsNumber">
                          <Link to='/koszyk'>
                            <FontAwesomeIcon icon={faPlusCircle} onClick={()=>{this.handleAddQuantity(item.id)}}></FontAwesomeIcon>
                          </Link>
                          <span>Ilość: {item.quantity}</span>
                          <Link to='/koszyk'>
                            <FontAwesomeIcon icon={faMinusCircle} onClick={()=>{this.handleSubtractQuantity(item.id)}}></FontAwesomeIcon>
                          </Link>
                        </div>
                      </td>
                      <td>
                          <Button onClick={()=>{this.handleRemove(item.id)}}>Usuń</Button>
                      </td>
                  </tr>
                    )
                }
              )}
              </tbody>
            </table>
            <Recipe />
          </div>
        </div>
      ):
      (
        <div className='empty-cart'>
          <h5 className='noProductFound'>Nie znaleźliśmy żadnych produktów w Twoim koszyku!</h5>
          <Link to='/home' className='backToHome'>
            <p>Wróć na </p>
            <FontAwesomeIcon icon={faHome} />
            <p>stronę główną, aby kontynuwać zakupy</p>
          </Link>
        </div>
      )
      return (
        <div className='container'>
          {addedItems}
        </div>
      )
    }
  }
const mapStateToProps = (state)=>{
  return {
    items: state.addedItems
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)

