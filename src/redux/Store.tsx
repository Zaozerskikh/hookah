import {combineReducers, configureStore} from "@reduxjs/toolkit";
import warningReducer, {WarningState} from "./warning_reducer/WarningReducer";
import cartReducer from "./cart_reducer/CartReducer";
import checkoutWindowReducer, {
  CheckoutWindowState
} from "./product_detailed_view_reducer/CheckoutWindowReducer";

const rootReducer = combineReducers({
  warning: warningReducer,
  cart: cartReducer,
  productDetailedView: checkoutWindowReducer
});

export type RootState = {
  warning: WarningState
  cart: Record<string, number>,
  productDetailedView: CheckoutWindowState
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
