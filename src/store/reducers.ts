import { favListReducer } from "./fav-list/reducers";
import { combineReducers } from "redux";

export default combineReducers({
  favList: favListReducer,
});
