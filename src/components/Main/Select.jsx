import React from "react";
import { connect } from "react-redux";

class Select extends React.Component {
  render() {
    const { selected } = this.props;
    if (selected) {
      return (
        <div className="kanban__main-select">
          <div className="main-select">
            <div className="select-wrapper-main">
              <div className="select-text-main">Add reports</div>
              <div className="select-event-note-main">
                <i className="material-icons">dashboard</i>
              </div>
            </div>
            <div className="select-wrapper">
              <div className="select-text">Add scheduled task</div>
              <div className="select-event-note">
                <i className="material-icons">event_note</i>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  selected: state.selected
});

export default connect(mapStateToProps)(Select);
