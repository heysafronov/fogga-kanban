import "./index.css";
import React from "react";
import Loadable from "react-loadable";
import Logo from "./components/Logo/Logo.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Basic from "./components/Routes/Basic/Basic.jsx";
import Manage from "./components/Routes/Manage/Manage.jsx";
import Reports from "./components/Routes/Reports/Reports.jsx";
import Schedule from "./components/Routes/Schedule/Schedule.jsx";
import Settings from "./components/Routes/Settings/Settings.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="kanban-wrapper">
        <div className="kanban">
          <Logo />
          <Header />
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Basic} />
            <Route path="/manage" component={Manage} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/reports" component={Reports} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    );
  }
}

const Loading = () => <div className="loading">Loading...</div>;

const Sidebar = Loadable({
  loader: () => import("./components/Sidebar/Sidebar.jsx"),
  loading: Loading
});

export default App;
