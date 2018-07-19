import React from "react";

class Add extends React.Component {
  render() {
    return (
      <div className="card-wrapper__footer">
        <div className="add-task">Add task</div>
        <div className="add-task-ico"><i
          className="material-icons">add_circle_outline</i></div>
      </div>
    );
  }
}

export default Add;
