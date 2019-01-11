import React, { Component } from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent';
// import Home from '../pages/home/home';

// 按需加载
const Home = asyncComponent(()=> import("../pages/home"))
const Msite = asyncComponent(()=> import("../pages/msite"))
const Order = asyncComponent(()=> import("../pages/order"))

class routerConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route to="/msite" component={Msite}></Route>
                        <Route to="/order" component={Order}></Route>
                        <Redirect from="/" to="/msite"></Redirect>
                    </Switch>
                </Home>
            </HashRouter>
        )
    }
}
export default routerConfig;
