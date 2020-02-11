import { DefaultRootState } from "react-redux";
import { favListInitialState } from "./fav-list/reducers";
import { FavListState } from "./fav-list/types";

export interface AppState extends DefaultRootState {
  favList: FavListState;
}

export default (): AppState => ({
  favList: favListInitialState
});
