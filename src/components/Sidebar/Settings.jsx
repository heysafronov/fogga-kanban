import React from "react";
import { NavLink } from "react-router-dom";

class Settings extends React.Component {
  render() {
    return (
      <NavLink to="/settings" activeClassName="active-area">
        <div className="kanban__sidebar-settings">
          <i className="material-icons">settings</i>
          <span>Settings</span>
        </div>
      </NavLink>
    );
  }
}

export default Settings;
