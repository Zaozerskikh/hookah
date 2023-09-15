import {combineReducers, configureStore} from "@reduxjs/toolkit";
import warningReducer, {WarningState} from "./warning_reducer/WarningReducer";
import cartReducer from "./cart_reducer/CartReducer";
import checkoutWindowReducer, {
  CheckoutWindowState
} from "./product_detailed_view_reducer/CheckoutWindowReducer";
import bottomHintReducer, {BottomHintState} from "./bottom_hint_reducer/BottomHintReducer";
import burgerReducer, {BurgerState} from "./burger_button_reducer/BurgerButtonReducer";

const rootReducer = combineReducers({
  warning: warningReducer,
  cart: cartReducer,
  productDetailedView: checkoutWindowReducer,
  bottomHint: bottomHintReducer,
  burger: burgerReducer
});

export type RootState = {
  warning: WarningState
  cart: Record<string, number>,
  productDetailedView: CheckoutWindowState,
  bottomHint: BottomHintState,
  burger: BurgerState
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
