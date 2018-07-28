import "./index.css";
import React from "react";
import Nav from "./components/Nav/Nav.jsx";
import Logo from "./components/Logo/Logo.jsx";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
// import Sidebar from "./components/Sidebar/Sidebar.jsx";

import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
const Loading = () => <div>Loading...</div>;

const Sidebar = Loadable({
  loader: () => import("./components/Sidebar/Sidebar.jsx"),
  loading: Loading
});

class App extends React.Component {
  render() {
    return (
      <div className="kanban-wrapper">
        <div className="kanban">
          <Logo />
          <Header />
          <Sidebar />
          <Switch>
            <Route exact path="*" component={Main} />
            <Route path="./reports" component={Nav} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
