import {ADD_CART,REDUCE_CART,GET_CART,CLEAR_CART} from './cartAction'
import {initState} from '../initState'
import {fromJS} from 'immutable'
export default function cartReducer(state = initState.cartList, actions) {
    switch(actions.type) {
        case ADD_CART: {
            let carList = fromJS(state)
            var isFood = carList.some(item => item.get('spuId') == actions.payload.food.spuId)
            if(isFood) {
                return (
                    carList.map(item => {
                        if(item.get('spuId') === actions.payload.food.spuId) {
                            return item.set('count',item.get('count') + 1)
                        }
                        return item;
                    })
                ).toJS()
            }
            let food = actions.payload.food;
            food.count = 1;
            return [...state, actions.payload.food]
        }
        case REDUCE_CART: {
            let carList = fromJS(state)
            var food = carList.find(item => item.get('spuId') === actions.payload.food.spuId)
            if(food.get('count') && food.get('count') <= 1) {
                return (
                    carList.filter(item =>item.get('spuId') !== actions.payload.food.spuId)
                ).toJS()
            }else {
                return (
                    carList.map(item => {
                        if(item.get('spuId')  === actions.payload.food.spuId) {
                            return item.set('count', item.get('count') - 1)
                        }
                        return item;
                    })
                ).toJS()
            }
        }
        case GET_CART: {
            return [...state];
        }
        case CLEAR_CART: {
            return [];
        }
        default: {
            return [...state]
        }
    }
}