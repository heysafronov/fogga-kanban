import React from "react";
import Child from "./child.jsx";
import Logo from "../../Logo/Logo.jsx";
import Header from "../../Header/Header.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";

class Settings extends React.Component {
  render() {
    return (
      <div className="kanban-wrapper">
        <div className="kanban">
          <Logo />
          <Header />
          <Sidebar />
          <Child />
        </div>
      </div>
    );
  }
}

export default Settings;
