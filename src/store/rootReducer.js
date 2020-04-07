import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import cityList from './cityList/reducer';

export default combineReducers({
  appState,
  user,
  cityList
});
