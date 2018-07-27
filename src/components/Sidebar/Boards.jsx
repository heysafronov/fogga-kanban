import React from "react";
import { Link } from "react-router-dom";

class Boards extends React.Component {
  render() {
    return (
      <Link to="/boards">
        <div className="boards-area">
          <i className="material-icons">dns</i>
          <span>Boards</span>
        </div>
      </Link>
    );
  }
}

export default Boards;
