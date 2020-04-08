import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import cityList from './cityList/reducer';
import cityDetails from './cityDetails/reducer';
import cityFilter from './cityFilter/reducer';

export default combineReducers({
  appState,
  user,
  cityList,
  cityDetails,
  cityFilter
});
