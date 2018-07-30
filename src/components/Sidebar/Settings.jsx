import React from "react";
import { Link } from "react-router-dom";

class Settings extends React.Component {
  render() {
    return (
      <Link to="/settings">
        <div className="kanban__sidebar-settings">
          <i className="material-icons">settings</i>
          <span>Settings</span>
        </div>
      </Link>
    );
  }
}

export default Settings;
