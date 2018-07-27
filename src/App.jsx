import "./index.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Boards from "./components/Routers/Boards/index.jsx";
import Manage from "./components/Routers/Manage/index.jsx";
import Reports from "./components/Routers/Reports/index.jsx";
import Schedule from "./components/Routers/Schedule/index.jsx";
import Settings from "./components/Routers/Settings/index.jsx";

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
