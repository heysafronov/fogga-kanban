import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/";
import setNewTask from "../../hoc/setNewTask";

class Form extends React.Component {
  render() {
    const {
      text,
      handleOption,
      handleChange,
      isValidField,
      getClassName
    } = this.props;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="add-card-form add-card-form-true"
      >
        <div className="add-card-form__header">
          <div onClick={handleOption} className="form__low-pr">
            <input
              className="form__checkbox"
              type="radio"
              name="priority"
              value="card-color-low"
              alt="Low Priority"
            />
            <label className="form__label" htmlFor="Low Priority">
              Low Priority
            </label>
          </div>
          <div onClick={handleOption} className="form__med-pr">
            <input
              className="form__checkbox"
              type="radio"
              name="priority"
              value="card-color-med"
              alt="Med Priority"
            />
            <label className="form__label" htmlFor="Med Priority">
              Med Priority
            </label>
          </div>
          <div onClick={handleOption} className="form__high-pr">
            <input
              className="form__checkbox"
              type="radio"
              name="priority"
              value="card-color-high"
              alt="High Priority"
            />
            <label className="form__label" htmlFor="High Priority">
              High Priority
            </label>
          </div>
        </div>
        <textarea
          className={getClassName()}
          type="text"
          placeholder="Write your task"
          value={text}
          onChange={handleChange}
        />
        <div className="add-card-form__footer">
          <div className="form__footer">
            <div className="form__footer-av">
              <img src={require("../../assets/img/thompson.jpg")} />
            </div>
            <div className="attach-ico">
              <i className="material-icons">attach_file</i>
            </div>
          </div>
          <input
            className="form-add-btn"
            type="submit"
            value="Add"
            disabled={!isValidField()}
          />
        </div>
      </form>
    );
  }

  handleSubmit = ev => {
    const { addTask } = this.props;
    ev.preventDefault();
    addTask(this.props);
  };
}

export default connect(
  null,
  { addTask }
)(setNewTask(Form));
