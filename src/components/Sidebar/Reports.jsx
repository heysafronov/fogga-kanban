import React from "react";
import { Link } from 'react-router-dom';

class Reports extends React.Component {
  render() {
    return (
      <Link to="/reports">
        <div className="reports-area">
          <i className="material-icons">assessment</i>
          <span>Reports</span>
        </div>
      </Link>
    );
  }
}

export default Reports;
