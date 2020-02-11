import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Layout from "../components/Layout";

describe("<App/>", () => {
  test("renders layout component under app", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Layout />));
  });
});
