import React from "react";
import {mount, shallow} from "enzyme";
import FavouriteList from "../../components/FavouriteList";
import FavouriteItem from "../../components/FavouriteItem";

describe("<FavouriteList/>", () => {
  let props: any;

  beforeEach(() => {
    props = {
      items: [
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
      ],
      updateRating: jest.fn( () => {})
    };
  });

  test("renders correctly", () => {
    const wrapper = shallow(<FavouriteList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders fav item List", () => {
    const wrapper = mount(<FavouriteList {...props} />);
    expect(wrapper.find(FavouriteItem)).toHaveLength(5);
  });

  test("renders empty fav list", () => {
    props = { ...props, items: [] };
    const wrapper = mount(<FavouriteList {...props} />);
    expect(
      wrapper.find({ "data-testid": "notFound" }).hostNodes()
    ).toHaveLength(1);
  });
});
