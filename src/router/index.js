import React, { Component } from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'

// 按需加载
const msite = asyncComponent(()=> import("../pages/msite/msite"))

class routerConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route to="/msite" component={msite}></Route>
                    <Redirect exact from='/' to="/msite"></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}
export default routerConfig;
