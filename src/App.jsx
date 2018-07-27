import "./index.css";
import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
const Loading = () => <div>Loading...</div>;

// const Manage = Loadable({
//   loader: () => import("./components/Routes/Manage/index.jsx"),
//   loading: Loading
// });
//

const Boards = Loadable({
  loader: () => import("./components/Routes/Boards/index.jsx"),
  loading: Loading
});
//
// const Schedule = Loadable({
//   loader: () => import("./components/Routes/Schedule/index.jsx"),
//   loading: Loading
// });
//
// const Reports = Loadable({
//   loader: () => import("./components/Routes/Reports/index.jsx"),
//   loading: Loading
// });
//
// const Settings = Loadable({
//   loader: () => import("./components/Routes/Settings/index.jsx"),
//   loading: Loading
// });
//
// const Application = () => (
//   <Switch>
//     <Route path="/manage" component={Manage} />
//     {/*<Route exact path="" component={Boards} />*/}
//     <Route path="/schedule" component={Schedule} />
//     <Route path="/reports" component={Reports} />
//     <Route path="/settings" component={Settings} />
//   </Switch>
// );

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Boards/>
      </React.Fragment>
    );
  }
}

export default App;
