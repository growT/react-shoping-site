import React, { Component } from 'react'
import {connect} from 'react-redux'
import './index.css'
import {addCart,reduceCart,clearCart} from '../../store/cart/cartAction'

import add_icon from '../../assets/add_icon.png'
import minus_icon from '../../assets/minus_icon.png'
import move_icon from '../../assets/move_icon.png'

class CartList extends Component {
    render() {
        return (
            <div className="cart-list">
                <div className="cart-title">
                    <span>购物车</span>
                    <span onClick={this.props.clearCart}>
                        <img className="move_icon" src={move_icon} alt="move_icon"/>
                        清空购物车
                    </span>
                </div>
                {this.props.cartList.map((item, index) => {
                    return (
                        <div className="cart-item" key={index}>
                            <span className="food-name">{item.spuName}</span>
                            <span className="food-price">{item.currentPrice * item.count}</span>
                            <span className="opt-cart">
                                <img className="minus-icon" src={minus_icon} onClick={() => this.props.minusCart(item)} alt="minus-icon"/>
                                <span className="count">{item.count}</span>
                                <img className="add-icon" src={add_icon} onClick={() => this.props.addCart(item)} alt="add-icon"/>
                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
function mapStatetoProps(state) {
    return {
        cartList: state.cartList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addCart: (item) => {dispatch(addCart(item))},
        minusCart: (item) =>{dispatch(reduceCart(item))},
        clearCart:() => (dispatch(clearCart()))
    }
}
let CartListComponent = connect(
    mapStatetoProps,
    mapDispatchToProps
)(CartList)
export default CartListComponent;