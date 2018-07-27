import React from "react";
import Nav from "../../Nav/Nav.jsx";
import Logo from "../../Logo/Logo.jsx";
import Main from "../../Main/Main.jsx";
import Header from "../../Header/Header.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import MainNav from "../../../MainNav.jsx";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
const Loading = () => <div>Loading...</div>;


const Schedule = Loadable({
  loader: () => import("../Schedule/index.jsx"),
  loading: Loading
});

const Reports = Loadable({
  loader: () => import("../Reports/index.jsx"),
  loading: Loading
});

const Settings = Loadable({
  loader: () => import("../Settings/index.jsx"),
  loading: Loading
});

const Manage = Loadable({
  loader: () => import("../Manage/index.jsx"),
  loading: Loading
});

class Boards extends React.Component {
  render() {
    return (
      <Switch>
      <div className="kanban-wrapper">
        <div className="kanban">
          <Logo />
          <Header />
          <Sidebar />

            <Route path="/manage" component={Manage} />
            <Route exact path="" component={MainNav} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/reports" component={Reports} />
            <Route path="/settings" component={Settings} />

        </div>
      </div>
      </Switch>
    );
  }
}

export default Boards;
