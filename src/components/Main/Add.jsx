import React from "react";
// import { connect } from "react-redux";
// import {isOpen} from "../../actions";
import ClassNames from "classnames";

class Add extends React.Component {
  render() {
    const on = ClassNames("add-card-form", "add-card-form-true");
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
    console.log(this.props);
    this.props.toggleOpenItem(this.props.item.type);

  };

  get isOpenAdd() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div>
        <form className="add-card-form add-card-form-true">
          <div className="add-card-form__header">
            <div className="from__low-pr">Low Priority</div>
            <div className="from__med-pr">Med Priority</div>
            <div className="from__high-pr">High Priority</div>
          </div>
          <textarea className="add-card-form__main" type="text"
                    placeholder="Write your task"/>
          <div className="add-card-form__footer">
            <div className="form__footer">
              <div className="form__footer-av"><img src="assets/img/av2.jpg"/>
              </div>
              <div className="attach-ico"><i
                className="material-icons">attach_file</i></div>
            </div>
            <div className="form__del"><i className="material-icons">clear</i>
            </div>
            <button className="form-add-btn">Add</button>
          </div>
        </form>
      </div>
    )
}

}

// const mapStateToProps = (state) => ({
//   isOpen: state.isOpen
// });

export default Add;
