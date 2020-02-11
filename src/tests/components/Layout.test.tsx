import React from "react";
import {shallow} from "enzyme";
import Layout from "../../components/Layout";
import FavouriteList from "../../components/FavouriteList";
import defaultRootState from "../../store/root-state";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { FavItem } from "../../store/fav-list/types";

describe("<Layout/>", () => {
  const mockStore = configureMockStore();
  let store: any;

  beforeEach(() => {
    store = mockStore({ ...defaultRootState });
  });

  test("renders FavouriteList component under layout", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Layout />
      </Provider>
    );
    expect(
      wrapper.contains(
        <FavouriteList
          items={[]}
          isRating={false}
          toggleRating={() => {}}
          updateRating={(favItem: FavItem, rating: number) => {}}
        />
      )
    );
  });
});
