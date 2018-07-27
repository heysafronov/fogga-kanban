import React from "react";
import { Link } from "react-router-dom";

class Manage extends React.Component {
  render() {
    return (
      <Link to="/manage">
        <div className="manage-area">
          <i className="material-icons">people</i>
          <span>Manage</span>
        </div>
      </Link>
    );
  }
}

export default Manage;
