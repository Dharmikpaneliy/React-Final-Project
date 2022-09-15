import * as ActionType from '../ActionType'

const initalState = {
    isLoading: false,
    Pro: [],
    error: ''
}

export const ProductReducer = (state = initalState, action) => {
    console.log(action.type, action.payload, state)
    switch (action.type) {
        case ActionType.PRODUCT_ADMIN:
            return {
                ...state,
                isLoading: false,
                Pro: action.payload,
                error: ''
            }
        case ActionType.POST_PRODUCT_ADMIN:
            return {
                ...state,
                isLoading: false,
                Pro: state.Pro.concat(action.payload),
                error: ''
            }
        case ActionType.DELETE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                Pro: state.Pro.filter((d, i) => d.id !== action.payload),
                error: ''
            }
        case ActionType.UPDATE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                Pro: state.Pro.map((l) => {
                    if (l.id === action.payload.id) {
                        return action.payload
                    } else {
                        return l;
                    }
                }),
                error: ''
            }
        default:
            return state;
    }
}