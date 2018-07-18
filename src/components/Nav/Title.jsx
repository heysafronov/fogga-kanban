import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="kanban__nav-name">
        <div className="kanban-name">Studio Board</div>
        <div className="kanban-arrow"><i
          className="material-icons xyu">expand_more</i></div>
      </div>
    );
  }
}

export default Title;
