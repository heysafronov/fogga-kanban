import React from "react";
import store from "../store/";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import { normalizedTasks } from "../api/data";
import Cards from "../components/Main/Cards.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("Cards", () => {
  it("should render a list of cards", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Cards data={normalizedTasks} />
      </Provider>
    );
    expect(wrapper.find(".card").length).toEqual(normalizedTasks.length);
  });
});
