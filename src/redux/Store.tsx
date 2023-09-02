import {combineReducers, configureStore} from "@reduxjs/toolkit";
import warningReducer, {WarningState} from "./warning_reducer/WarningReducer";
import cartReducer from "./cart_reducer/CartReducer";

const rootReducer = combineReducers({
  warning: warningReducer,
  cart: cartReducer,
});

export type RootState = {
  warning: WarningState
  cart: Record<string, number>,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
