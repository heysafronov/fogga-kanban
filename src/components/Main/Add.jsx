import React from "react";
import Form from "./Form.jsx";
import { whoIsOpen } from "../../actions";
import { connect } from "react-redux";

class Add extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div onClick={this.handleToggle} className="card-wrapper__footer">
          <div className="add-task">Add task</div>
          <div className="add-task-ico">
            <i className="material-icons">add_circle_outline</i>
          </div>
        </div>
        {this.formIsOpen}
      </React.Fragment>
    );
  }

  handleToggle = () => {
    const { whoIsOpenAction, typeCards } = this.props;
    whoIsOpenAction(typeCards);
  };

  get formIsOpen() {
    const { typeCards } = this.props;
    if (typeCards !== this.props.whoIsOpen) {
      return null;
    }
    return <Form type={typeCards} />;
  }
}

const mapStateToProps = state => ({
  whoIsOpen: state.whoIsOpen
});

export default connect(
  mapStateToProps,
  { whoIsOpenAction: whoIsOpen }
)(Add);
