import React, {Component} from 'react'
import './index.css'

import Header from '../../components/header'
import {getShopDetail} from '../../server'
import Food from './food'
import Evaluate from './evaluate'
import ShopDetail from './shopDetail'

class Shop extends Component{
    state = {
        shopId: '',
        shopInfo: {},
        categoryList: [],
    }
    componentDidMount() {
        let shopId = this.props.match.params.shopId;//获取路由传递的参数
        console.log(shopId);
        this.setState({shopId: shopId})
        //根据参数请求后台接口，返回店铺信息
        getShopDetail({
            shopId: shopId
        })
        .then((res) => {
            if(res.data.code === 0) {
                this.setState({
                    shopInfo: res.data.data.shopInfo,
                    categoryList: res.data.data.categoryList,
                })
            }
        })
        .catch(() => {

        }) 
    }
    render(){
        return (
            <div className="shops">
                <Header titleName="店铺"/>
                <div className="container">
                    <Food category={this.state.categoryList}/>
                </div>
               
                {/* <Evaluate />
                <ShopDetail /> */}
            </div>
        )
    }
}

export default Shop;