import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { cartReducer } from "./Cat_admin.reducer";
import { ProductReducer } from "./Pr_admin.reducer";

export const rootReducer = combineReducers({
    auth : authReducer,
    cat : cartReducer,
    Pr: ProductReducer,
    cart: cartReducer
})