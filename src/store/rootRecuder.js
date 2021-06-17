import { combineReducers } from "redux";
import cartRecuder from "./reducers/cartRecuder";

const rootReducer=combineReducers({
    cart:cartRecuder
})

export default rootReducer;