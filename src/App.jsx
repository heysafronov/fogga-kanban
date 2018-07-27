import "./index.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Boards from "./components/Routers/Boards.jsx";
import Manage from "./components/Routers/Manage.jsx";
import Reports from "./components/Routers/Reports.jsx";
import Schedule from "./components/Routers/Schedule.jsx";
import Settings from "./components/Routers/Settings.jsx";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/manage" component={Manage} />
        <Route exact path="/" component={Boards} />
        <Route exact path="/schedule" component={Schedule} />
        <Route path="/reports" component={Reports} />
        <Route path="/settings" component={Settings} />
      </Switch>
    );
  }
}

export default App;
