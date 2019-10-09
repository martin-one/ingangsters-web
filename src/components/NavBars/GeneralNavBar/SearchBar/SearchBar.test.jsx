import React from "react";
import { shallow, mount } from "enzyme";
import SearchBar from "./SearchBar";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";

const middlewares = [thunk];

describe("General Navbar: Search Bar", () => {
  it("renders", () => {
    const fakeStore = configureStore(middlewares)();
    const shallowRender = shallow(
      <SearchBar store={fakeStore} dispatch={null} />
    );
    expect(shallowRender).toMatchSnapshot();
  });

  it("has both right side variants", () => {
    const fakeStore = configureStore(middlewares)();
    const wrapper = mount(
      <Router>
        <SearchBar store={fakeStore} dispatch={null} />
      </Router>
    );

    const searchButtonList = wrapper.find(".append > .searchButton");
    const searchIconList = wrapper.find(".append > .rightSearchIcon");

    expect(searchButtonList.length).toBe(1);
    expect(searchIconList.length).toBe(1);
  });

  it("prefixIcon", () => {
    const fakeStore = configureStore(middlewares)();
    const wrapper = mount(
      <Router>
        <SearchBar store={fakeStore} dispatch={null} />
      </Router>
    );

    const searchIconList = wrapper.find(".searchBar > .prepend");
    expect(searchIconList.children().length).toBe(1);
  });
});
