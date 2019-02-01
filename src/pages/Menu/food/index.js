import React, {Component} from 'react'
import './index.css'
import {addCart,reduceCart,getCart} from '../../../store/cart/cartAction'
import { connect } from "react-redux";


import Category from '../../../components/categoryList'
import CartList from '../../../components/cartList'

import cart_nouse from '../../../assets/cart_nouse.png'
import cart_use from '../../../assets/cart_use.png'

class Food extends Component{
    constructor() {
        super();
        this.cartClick = this.cartClick.bind(this);
    }
    state = {
        isShowCart: false,
        totalPrice: 0,
        totalOrgPrice: 0,
        isMoveCart: false,
    }
    componentWillReceiveProps(nextProps) {
        this.getCartList(nextProps)
    }
    getCartList(nextProps) {
        let isShowCart = nextProps.cartList.length > 0;
        let totalPrice = 0;
        let totalOrgPrice = 0;
        nextProps.cartList.forEach((item) => {
            totalPrice += item.count * item.currentPrice;
            totalOrgPrice += item.count * item.originPrice;
        })
        console.log(isShowCart)
        this.setState({
            isShowCart: isShowCart,
            totalPrice: totalPrice,
            totalOrgPrice: totalOrgPrice,
        })
    }
    cartClick() {
        this.setState({isMoveCart: !this.state.isMoveCart})
    }
    render(){
        return (
            <div className="food">
                {/* 食物菜单 */}
                <Category  
                    className="category" 
                    key="hhh" 
                    categoryList={this.props.category} 
                    cartList={this.props.cartList} 
                    addCart={this.props.addCart} 
                    minusCart={this.props.minusCart}
                />
                {/* 购物车 */}
                {
                    this.state.isMoveCart && this.state.isShowCart  && (
                        <div className="mask" onClick={this.cartClick}></div>
                    )
                }
                <div className={this.state.isMoveCart && this.state.isShowCart ? ' cart-modal move-out': 'cart-modal move-in'}>
                    { this.state.isShowCart && (<CartList ref="cart"></CartList>)}
                </div> 

                {/* 底部结算栏 */}
                <div className="food-cart">
                    <div className="cart" 
                        style={{
                            backgroundImage: 'url(' + (this.state.isShowCart ? cart_use : cart_nouse) + ')',
                            backgroundSize: '100% 100%'
                        }}
                        onClick={this.cartClick}
                    >
                    {
                        this.state.isShowCart && (
                            <div className="tips">{this.props.cartList.length}</div>
                        )
                    }
                    </div>
                    <div className="price">
                        {
                            this.state.isShowCart && (
                                <p>
                                    <span className="total-price">￥{this.state.totalPrice}</span> 
                                    <span className="org-total-price">￥{this.state.totalOrgPrice}</span>
                                </p>
                            )
                        }
                        <p style={ {fontSize: this.state.isShowCart ? "11px": "14px"}}>另需配送费¥9</p>
                    </div>
                    <div className="pay" style={{background: this.state.isShowCart ? "#f8c74e" : ""}}>
                        { this.state.isShowCart ? '去结算': '¥0起送'}
                    </div>
                </div>
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