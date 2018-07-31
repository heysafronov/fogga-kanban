import React from "react";
import { NavLink } from "react-router-dom";

class Reports extends React.Component {
  render() {
    return (
      <NavLink to="/reports" activeClassName="active-area">
        <div className="reports-area">
          <i className="material-icons">assessment</i>
          <span>Reports</span>
        </div>
      </NavLink>
    );
  }
}

export default Reports;
