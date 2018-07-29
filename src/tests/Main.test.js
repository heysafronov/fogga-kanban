import React from "react";
import store from "../store/";
import Enzyme, { mount, shallow, render } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import Main from "../components/Main/Main.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("Main", () => {
  it("cards should be open by default", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(wrapper.find(".kanban__main-wrapper").length).toBe(4);
  });
});
