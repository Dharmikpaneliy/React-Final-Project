import *as ActionTypes from '../ActionType'

export const addtocart = (d) => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_TO_CART, payload:{id:d.id, qty:1} })
}   

export const checktocart = () => (dispatch) => {
    dispatch({ type: ActionTypes.CHECK_TO_CART })
}