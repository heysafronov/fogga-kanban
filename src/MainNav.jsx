import React from "react";
import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main/Main.jsx";

class MainNav extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default MainNav;
