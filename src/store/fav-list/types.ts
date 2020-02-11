export interface FavItem {
  id?: number;
  name: string;
  author: string;
  rating: number;
}

export interface FavListState {
  items: FavItem[];
  isFetching: boolean;
  isRating: boolean;
}

export const DEFAULT_SORT_PROP = "rating";

export const GET_FAV_LIST = "GET_FAV_LIST";
export const RECEIVE_FAV_LIST = "RECEIVE_FAV_LIST";
export const RECEIVE_FAV_LIST_ERROR = "RECEIVE_FAV_LIST_ERROR";
export const RATE_FAV_ITEM = "RATE_FAV_ITEM";
export const TOGGLE_RANDOM_FAV_RATING = "TOGGLE_RANDOM_FAV_RATING";

interface GetFavListAction {
  type: typeof GET_FAV_LIST;
}

interface ReceiveFavListAction {
  type: typeof RECEIVE_FAV_LIST;
  payload: FavItem[];
}

interface ReceiveFavListErrorAction {
  type: typeof RECEIVE_FAV_LIST_ERROR;
  payload: FavItem[];
}

interface RateFavItemAction {
  type: typeof RATE_FAV_ITEM;
  payload: FavItem;
}

interface ToggleRandomRatingAction {
  type: typeof TOGGLE_RANDOM_FAV_RATING;
}

export type FavListActions =
  | GetFavListAction
  | ReceiveFavListAction
  | ReceiveFavListErrorAction
  | RateFavItemAction
  | ToggleRandomRatingAction;
