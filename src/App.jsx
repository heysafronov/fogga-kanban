import React from "react";
import "./index.css";
import Logo from "./components/Logo/Logo.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main/Main.jsx";

class App extends React.Component {
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

export default App;
