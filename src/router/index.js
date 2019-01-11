import React, { Component } from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent';
// import Home from '../pages/home/home';

// 按需加载
const Home = asyncComponent(()=> import("../pages/home"))
const Msite = asyncComponent(()=> import("../pages/msite"))
const Order = asyncComponent(()=> import("../pages/order"))
const Profile = asyncComponent(()=> import("../pages/profile"))
const Search = asyncComponent(()=> import("../pages/search"))
const SearchResult = asyncComponent(()=> import("../pages/searchResult"))

const Shop = asyncComponent(()=> import("../pages/shop"))
const Evaluate = asyncComponent(()=> import("../pages/shop/evaluate"))
const Food = asyncComponent(()=> import("../pages/shop/food"))
const ShopDetail = asyncComponent(()=> import("../pages/shop/shopDetail"))

const ShopList = asyncComponent(()=> import("../pages/shopList"))

class routerConfig extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                   {/* 这里子路由可以直接写，不用嵌套 */}
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/msite" component={Msite}></Route>
                    <Route path="/order" component={Order}></Route>
                    <Route path="/profile" component={Profile}></Route>

                    <Route path="/search" component={Search}></Route>
                    <Route path="/searchResult" component={SearchResult}></Route>

                    <Route  path="/shop" component={Shop}></Route>
                    <Route path="/shop/evaluate" component={Evaluate}></Route>
                    <Route path="/shop/food" component={Food}></Route>
                    <Route path="/shop/shopDetail" component={ShopDetail}></Route>
                    

                    <Route path="/shopList" component={ShopList}></Route>
                       
                </div>
            </HashRouter>
        )
    }
}
export default routerConfig;
