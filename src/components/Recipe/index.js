import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./recipe.scss"


class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
  
        return(
            <div className="recipe-container container">
                <div className="collection">
                     <label>
                        <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                        <span>Koszt wysyłki(+12zł)</span>
                    </label><br/>
                       
                    <span>Razem: {this.props.total} zł</span>
                </div>
                    <div className="checkout">
                        <button>Zamawiam</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)