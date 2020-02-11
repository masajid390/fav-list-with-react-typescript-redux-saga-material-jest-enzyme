import {
  DEFAULT_SORT_PROP,
  FavItem,
  FavListActions,
  FavListState,
  GET_FAV_LIST,
  RATE_FAV_ITEM,
  RECEIVE_FAV_LIST,
  RECEIVE_FAV_LIST_ERROR,
  TOGGLE_RANDOM_FAV_RATING
} from "./types";
import { sortDesc } from "../../utils/array";

export const favListInitialState: FavListState = {
  items: [],
  isFetching: false,
  isRating: false
};

export const favListReducer = (
  state: FavListState = favListInitialState,
  action: FavListActions
): FavListState => {
  switch (action.type) {
    case GET_FAV_LIST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case RECEIVE_FAV_LIST_ERROR: {
      return {
        ...state,
        isFetching: false
      };
    }
    case RECEIVE_FAV_LIST: {
      return {
        ...state,
        items: getSortedFavList(action.payload),
        isFetching: false
      };
    }
    case RATE_FAV_ITEM: {
      return {
        ...state,
        items: getFavListAfterRate([...state.items], action.payload)
      };
    }
    case TOGGLE_RANDOM_FAV_RATING: {
      return {
        ...state,
        isRating: !state.isRating
      };
    }
    default:
      return state;
  }
};

const getSortedFavList = (items: FavItem[]): FavItem[] => {
  return sortDesc([...items], DEFAULT_SORT_PROP);
};

const getFavListAfterRate = (items: FavItem[], favItem: FavItem): FavItem[] => {
  const _favList = [...items];
  const index = items.findIndex(item => item.id === favItem.id);
  if (index !== -1) {
    _favList[index] = favItem;
  }
  return getSortedFavList(_favList);
};
