import {combineReducers, configureStore} from "@reduxjs/toolkit";
import warningReducer from "./warning_reducer/WarningReducer";

const rootReducer = combineReducers({
  warning: warningReducer
});

export type RootState = {
  warning: {
    isShown: boolean;
  };
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
