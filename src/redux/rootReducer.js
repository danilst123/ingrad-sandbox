import { combineReducers } from "redux";
import { navigationReducer } from "./navigation/reducer";
import { themeReducer } from "./theme/reducer";

export default combineReducers({
  theme: themeReducer,
  navigation: navigationReducer
});