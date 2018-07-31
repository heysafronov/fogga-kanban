import React from "react";
import { NavLink } from "react-router-dom";

class Manage extends React.Component {
  render() {
    return (
      <NavLink to="/manage" activeClassName="active-area">
        <div className="manage-area">
          <i className="material-icons">people</i>
          <span>Manage</span>
        </div>
      </NavLink>
    );
  }
}

export default Manage;
