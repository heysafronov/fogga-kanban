import React from "react";
// import { connect } from "react-redux";
// import {isOpen} from "../../actions";
import Form from "./Form.jsx";
// import { connect } from "react-redux";

class Add extends React.Component {
  render() {
    return (
<React.Fragment>
  <div onClick={this.handleAddTask} className="card-wrapper__footer">
    <div className="add-task">Add task</div>
    <div className="add-task-ico"><i
      className="material-icons">add_circle_outline</i></div>
  </div>
  {this.isOpenAdd}
</React.Fragment>
    );
  }

  handleAddTask = () => {
    this.props.toggleOpenItem(this.props.item.type);
  };

  get isOpenAdd() {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <Form type={this.props.item.type}/>
    )
}

}

// const mapStateToProps = (state) => ({
//   isOpenA: state.isOpen
// });

export default Add;
