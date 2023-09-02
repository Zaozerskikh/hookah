import {combineReducers, configureStore} from "@reduxjs/toolkit";
import warningReducer, {WarningState} from "./warning_reducer/WarningReducer";
import shopGridSizeReducer, {ShopGridSizeState} from "./shop_grid_size_reducer/ShopGridSizeReducer";
import cartReducer from "./cart_reducer/CartReducer";
import menuReducer, {MenuState} from "./menu_reducer/MenuReducer";

const rootReducer = combineReducers({
  warning: warningReducer,
  grid: shopGridSizeReducer,
  cart: cartReducer,
  menu: menuReducer
});

export type RootState = {
  warning: WarningState
  grid: ShopGridSizeState
  cart: Record<string, number>,
  menu: MenuState
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
