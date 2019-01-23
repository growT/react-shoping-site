import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Route from './router'
import store from './store'
import {Provider} from 'react-redux'

// ReactDOM.render(<App />, document.getElementById('root')); 
// 使用了router之后，入口需要渲染的是router而不是 App组件了
var render = (Componet) => {
    ReactDOM.render(
        <Provider store={store}>
            <Componet />
        </Provider>, 
        document.getElementById('root')
    )
}
render(Route)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
