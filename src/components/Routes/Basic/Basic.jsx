import React from "react";
import Loadable from "react-loadable";

class Basic extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
      </React.Fragment>
    );
  }
}

const Loading = () => <div className="loading">Loading...</div>;

const Main = Loadable({
  loader: () => import("../../Main/Main.jsx"),
  loading: Loading
});

const Nav = Loadable({
  loader: () => import("../../Nav/Nav.jsx"),
  loading: Loading
});

export default Basic;
