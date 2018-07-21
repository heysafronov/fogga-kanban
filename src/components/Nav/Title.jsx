import React from "react";
import { connect } from "react-redux";
import { boardOpen } from "../../actions/";

class Title extends React.Component {
  render() {
    return (
      <div className="kanban__nav-name">
        <div className="kanban-name">Studio Board</div>
        <div className="kanban-arrow" onClick={this.handleBoardOpen}>
          <i className="material-icons">
            {this.props.board ? "expand_more" : "chevron_right"}
          </i>
        </div>
      </div>
    );
  }

  handleBoardOpen = () => {
    this.props.boardOpen();
  };
}

const mapStateToProps = state => ({
  board: state.board
});

export default connect(
  mapStateToProps,
  { boardOpen }
)(Title);
