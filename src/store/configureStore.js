import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootRecuder";

export function configureStore() {
    return createStore(rootReducer,devToolsEnhancer());
}