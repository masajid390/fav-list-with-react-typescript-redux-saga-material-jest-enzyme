import React from "react";
import {shallow} from "enzyme";
import Layout from "../../components/Layout";
import FavouriteList from "../../components/FavouriteList";
import defaultRootState from "../../store/root-state";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { FavItem } from "../../store/fav-list/types";
import usePagination from "../../hooks/pagination";

interface HookWrapperProps {
  hook: () => void
}

const HookWrapper:React.FC<HookWrapperProps> = ({hook}) => {
  const _hook = hook();
  return <div data-hook={_hook}/>
};

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

  test("tests useFavItemRandomRating", async () => {
    const items = [
        {
          id: 1,
          name: "The Hunger Games",
          author: "Suzanne Collins",
          rating: 4.33
        },
        {
          id: 2,
          name: "Harry Potter and the Order of the Phoenix",
          author: "J.K. Rowling",
          rating: 4.49
        },
        {
          id: 3,
          name: "To Kill a Mockingbird",
          author: "Harper Lee",
          rating: 4.27
        },
        {
          id: 4,
          name: "Pride and Prejudice",
          author: "Jane Austen",
          rating: 4.26
        },
        {
          id: 5,
          name: "Twilight",
          author: "Stephenie Meyer",
          rating: 4.33
        }
      ];
    let wrapper = shallow(<HookWrapper hook={() => usePagination(items, 1)}/>);
    let hook = wrapper.find('div').prop('data-hook') as Array<any>;
    let [pagingProps, pageItems] = hook;
    expect(pageItems.length).toEqual(1);
    expect(pagingProps.count).toEqual(5);

    wrapper = shallow(<HookWrapper hook={() => usePagination(items, 2)}/>);
    hook = wrapper.find('div').prop('data-hook') as Array<any>;
    [pagingProps, pageItems] = hook;
    expect(pageItems.length).toEqual(2);
    expect(pagingProps.count).toEqual(3);
  });
});
