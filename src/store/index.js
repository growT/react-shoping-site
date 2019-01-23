import {createStore, combineReducers, applyMiddleware} from 'redux'
import cartList from './cart/cartReducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({cartList: cartList}),
  applyMiddleware(thunk)
)

export default store