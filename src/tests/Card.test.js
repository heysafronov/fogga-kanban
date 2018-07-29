import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { normalizedTasks } from "../api/data";
import Cards from "../components/Main/Cards.jsx";
import { Provider } from "react-redux";
import store from "../store/";

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
