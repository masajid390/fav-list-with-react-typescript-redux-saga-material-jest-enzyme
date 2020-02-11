import React from "react";
import {shallow} from "enzyme";
import FavouriteItem from "../../components/FavouriteItem";
import { FavItem } from "../../store/fav-list/types";
import Rating from "@material-ui/lab/Rating";

describe("<FavouriteItem/>", () => {
  let props: any;

  beforeEach(() => {
    props = {
      item: {name: "Book", author: "Arslan", rating: 5},
      updateRating: (favItem: FavItem, rating: number) => {}
  }
  });

  test("renders correctly", () => {
    const wrapper = shallow(<FavouriteItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders fav item heading", () => {
    const wrapper = shallow(<FavouriteItem {...props} />);
    expect(wrapper.find({ "data-testid": "name" }).text()).toEqual("Book");
  });

  test("renders fav item author", () => {
    const wrapper = shallow(<FavouriteItem {...props} />);
    expect(wrapper.find({ "data-testid": "author" }).text()).toEqual("Arslan");
  });

  test("renders Rating component under FavouriteItem", () => {
    const wrapper = shallow(<FavouriteItem {...props} />);
    expect(wrapper.find(Rating)).toHaveLength(1);
  });

  test("renders correct rating value", () => {
    const wrapper = shallow(<FavouriteItem {...props} />);
    expect(wrapper.find(Rating).prop("value")).toEqual(5);
  });

  test("tests invalid rating", () => {
    props = { ...props, item: {...props.item, rating: -1} };
    let wrapper = shallow(<FavouriteItem {...props} />);
    expect(wrapper.find({ "data-testid": "invalidRating" }).text()).toEqual(
      "Invalid Rating"
    );

    props = { ...props, item: {...props.item, rating: 6} };
    wrapper = shallow(<FavouriteItem  {...props} />);
    expect(wrapper.find({ "data-testid": "invalidRating" }).text()).toEqual(
      "Invalid Rating"
    );
  });
});
