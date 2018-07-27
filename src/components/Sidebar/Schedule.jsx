import React from "react";
import { Link } from "react-router-dom";

class Schedule extends React.Component {
  render() {
    return (
      <Link to="/schedule">
        <div className="schedule-area">
          <i className="material-icons">event_note</i>
          <span>Schedule</span>
        </div>
      </Link>
    );
  }
}

export default Schedule;
