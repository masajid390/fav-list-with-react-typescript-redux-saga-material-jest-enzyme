import {
  FavItem,
  FavListActions,
  GET_FAV_LIST,
  RATE_FAV_ITEM,
  RECEIVE_FAV_LIST,
  TOGGLE_RANDOM_FAV_RATING,
} from "./types";

export const getFavList = (): FavListActions => ({
  type: GET_FAV_LIST,
});

export const receiveFavList = (favItems: FavItem[]): FavListActions => ({
  type: RECEIVE_FAV_LIST,
  payload: favItems,
});

export const receiveFavListError = (errors: any): FavListActions => ({
  type: RECEIVE_FAV_LIST,
  payload: errors,
});

export const rateFavItem = (favItem: FavItem): FavListActions => ({
  type: RATE_FAV_ITEM,
  payload: favItem,
});

export const toggleRandomFavRating = (): FavListActions => ({
  type: TOGGLE_RANDOM_FAV_RATING,
});
