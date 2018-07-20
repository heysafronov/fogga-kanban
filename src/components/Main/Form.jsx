import React from "react";
import { connect } from "react-redux";
import ClassNames from "classnames";

class Form extends React.Component {
  render() {

    const on = ClassNames("add-card-form", "add-card-form-true");
    return (
      <form className={this.props.isOpen ? on : "add-card-form"}>
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
    );
  }
}

const mapStateToProps = (state) => ({
  addTask: state.addTask
});

export default connect(mapStateToProps)(Form);
