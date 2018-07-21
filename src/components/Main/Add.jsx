import React from "react";
import { whoOpen } from "../../actions";
import Form from "./Form.jsx";
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
        {this.isOpenForm}
      </React.Fragment>
    );
  }

  handleToggle = () => {
    const { whoOpenAction, typeCards } = this.props;
    whoOpenAction(typeCards);
  };

  get isOpenForm() {
    const { typeCards } = this.props;
    if (typeCards !== this.props.whoOpen) {
      return null;
    }
    return (
      <Form type={typeCards}/>
    );
  }

}

const mapStateToProps = (state) => ({
  whoOpen: state.whoOpen
});

export default connect(mapStateToProps, { whoOpenAction: whoOpen })(Add);
