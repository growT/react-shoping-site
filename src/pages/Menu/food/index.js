import React, {Component} from 'react'
import './index.css'
import {addCart,reduceCart,getCart} from '../../../store/cart/cartAction'
import { connect } from "react-redux";


import Category from '../../../components/categoryList'

class Food extends Component{
    render(){
        return (
            <div>
                <Category  key="hhh" categoryList={this.props.category} cartList={this.props.cartList} addCart={this.props.addCart} minusCart={this.props.minusCart}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cartList: state.cartList//这里为什么是default,因为combineReducers时数据没有对应，所以返回的数据系统默认命名了
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCart: (item) => {dispatch(addCart(item))},
        getCart: () => {dispatch(getCart())},
        minusCart: (item) =>{dispatch(reduceCart(item))}
    }

}

let FoodComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Food); //通过connect返回的容器组件

export default FoodComponent;