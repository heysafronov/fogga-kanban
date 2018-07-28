import "./index.css";
import React from "react";
import Loadable from "react-loadable";
import Nav from "./components/Nav/Nav.jsx";
import Logo from "./components/Logo/Logo.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="kanban-wrapper">
        <div className="kanban">
          <Logo />
          <Header />
          <Sidebar />
          <Main />
          <Nav />
        </div>
      </div>
    );
  }
}

const Loading = () => <div className="loading">Loading...</div>;
const Main = Loadable({
  loader: () => import("./components/Main/Main.jsx"),
  loading: Loading
});

export default App;
