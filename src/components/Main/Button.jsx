import React from "react";
import { connect } from "react-redux";
import { selected } from "../../actions/";

class Button extends React.Component {
  render() {
    const { whoIsOpen, select } = this.props;
    if (!whoIsOpen) {
      return (
        <div onClick={this.handleClick} className="kanban__main-add-btn">
          <i className="material-icons">{select ? "check" : "add"}</i>
        </div>
      );
    }
    return null;
  }

  handleClick = () => {
    const { selected } = this.props;
    selected();
  };
}

const mapStateToProps = state => ({
  whoIsOpen: state.whoIsOpen,
  select: state.selected
});

export default connect(
  mapStateToProps,
  { selected }
)(Button);
