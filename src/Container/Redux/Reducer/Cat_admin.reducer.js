import * as ActionType from '../ActionType'

const initalState = {
    isLoading: false,
    category: [],
    error: ''
}

export const cartReducer = (state = initalState, action) => {
    console.log(action.type, action.payload, state)
    switch (action.type) {
        case ActionType.CAT_ADMIN:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                error: ''
            }
        case ActionType.POST_CAT_ADMIN:
            return {
                ...state,
                isLoading: false,
                category: state.category.concat(action.payload),
                error: ''
            }
        case ActionType.DELETE_ADMIN:
            return {
                ...state,
                isLoading: false,
                category: state.category.filter((d, i) => d.id !== action.payload),
                error: ''
            }
        case ActionType.UPDATE_ADMIN:
            return {
                ...state,
                isLoading: false,
                category: state.category.map((l) => {
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