import React from "react";
import Logo from "../Logo/Logo.jsx";
import Header from "../Header/Header.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Nav from "../Nav/Nav.jsx";

class Schedule extends React.Component {
  render() {
    return (
      <div className="kanban-wrapper">
        <div className="kanban">
          <Logo />
          <Header />
          <Sidebar />
          <Nav />
        </div>
      </div>
    );
  }
}

export default Schedule;
