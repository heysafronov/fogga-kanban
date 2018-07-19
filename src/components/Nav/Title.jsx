import React from "react";
import { boardOpen } from "../../acs/";
import { connect } from "react-redux";

class Title extends React.Component {

  render() {
    return (
      <div className="kanban__nav-name">
        <div className="kanban-name">Studio Board</div>
        <div className="kanban-arrow" onClick={this.handleBoardOpen}><i
          className="material-icons xyu">expand_more</i></div>
      </div>
    );
  }

  handleBoardOpen = () => {
    this.props.boardOpen();
  };

}

export default connect(null, { boardOpen })(Title);
