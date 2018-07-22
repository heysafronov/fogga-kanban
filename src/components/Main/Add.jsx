import React from "react";
import Form from "./Form.jsx";
import { connect } from "react-redux";
import { whoIsOpen } from "../../actions";

class Add extends React.Component {
  render() {
    const { typeCards, whoIsOpen } = this.props;
    return (
      <React.Fragment>
        <div onClick={this.handleToggle} className="card-wrapper__footer">
          <div className="add-task">Add task</div>
          <div className="add-task-ico">
            <i className="material-icons">
              {typeCards === whoIsOpen
                ? "remove_circle_outline"
                : "add_circle_outline"}
            </i>
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
    const { typeCards, whoIsOpen } = this.props;
    if (typeCards !== whoIsOpen) {
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
