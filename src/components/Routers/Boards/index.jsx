import React from "react";
import Nav from "../../Nav/Nav.jsx";
import Logo from "../../Logo/Logo.jsx";
import Main from "../../Main/Main.jsx";
import Header from "../../Header/Header.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";

class Boards extends React.Component {
  render() {
    return (
      <div className="kanban-wrapper">
        <div className="kanban">
          <Logo />
          <Header />
          <Sidebar />
          <Nav />
          <Main />
        </div>
      </div>
    );
  }
}

export default Boards;
