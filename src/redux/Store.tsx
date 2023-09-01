import {combineReducers, configureStore} from "@reduxjs/toolkit";
import warningReducer, {WarningState} from "./warning_reducer/WarningReducer";
import shopGridSizeReducer, {ShopGridSizeState} from "./shop_grid_size_reducer/ShopGridSizeReducer";

const rootReducer = combineReducers({
  warning: warningReducer,
  grid: shopGridSizeReducer
});

export type RootState = {
  warning: WarningState
  grid: ShopGridSizeState
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
