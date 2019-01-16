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

const Menu = asyncComponent(()=> import("../pages/Menu"))

const Shops = asyncComponent(()=> import("../pages/shops"))

class routerConfig extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                   {/* 这里子路由可以直接写，不用嵌套 */}
                    
                    <Route path="/main" component={Home}></Route>
                    <Route path="/main/msite" component={Msite}></Route>
                    <Route path="/main/order" component={Order}></Route>
                    <Route path="/main/profile" component={Profile}></Route>

                    <Route path="/search" component={Search}></Route>
                    <Route path="/searchResult" component={SearchResult}></Route>

                    <Route path="/menu" component={Menu}></Route>
                    
                    <Route path="/shops" component={Shops}></Route>

                    {/* <Redirect from="/" exact to="/main/msite"></Redirect> */}
                    {/*路由还是有些问题 设置/的时候会出现问题 */}
                </div>
            </HashRouter>
        )
    }
}
export default routerConfig;
