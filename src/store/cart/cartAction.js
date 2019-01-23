export const ADD_CART = 'ADD_CART';
export const addCart = function(food) {
    return {
        type: ADD_CART,
        payload: {
            food: food,
        }
    }
}
export const REDUCE_CART = 'REDUCE_CART';
export const reduceCart = function(food) {
    return {
        type: REDUCE_CART,
        payload: {
            food: food,
        }
    }
}
export const GET_CART = 'GET_CART';
export const getCart = function() {
    return {
        type: GET_CART,
        payload: {
            
        }
    }
}
export const CLEAR_CART = 'CLEAR_CART';
export const clearCart = function() {
    return {
        type: CLEAR_CART,
        payload: {
            
        }
    }
}