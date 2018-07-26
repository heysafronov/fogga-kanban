import React from "react";
import { connect } from "react-redux";

class Button extends React.Component {
  render() {
    const { whoIsOpen } = this.props;
    if (!whoIsOpen) {
      return (
        <div className="kanban__main-add-btn">
          <i className="material-icons">add</i>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  whoIsOpen: state.whoIsOpen
});

export default connect(mapStateToProps)(Button);
