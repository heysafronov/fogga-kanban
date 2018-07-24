import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/";

class Form extends React.Component {
  state = {
    id: "",
    type: "",
    priority: "",
    user: "M. Thompson",
    text: "",
    avatar: "./41aad055f35eb28f42b84ca1b4cf5d53.jpg",
    comments: "0",
    attach: "0",
    style: ""
  };

  render() {
    const { text } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="add-card-form add-card-form-true"
      >
        <div className="add-card-form__header">
          <div onClick={this.handleOption} className="form__low-pr">
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
          <div onClick={this.handleOption} className="form__med-pr">
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
          <div onClick={this.handleOption} className="form__high-pr">
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
          className={this.getClassName()}
          type="text"
          placeholder="Write your task"
          value={text}
          onChange={this.handleChange}
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
            disabled={!this.isValidField()}
          />
        </div>
      </form>
    );
  }

  handleOption = ev => {
    this.setState({
      style: ev.target.value,
      priority: ev.target.alt
    });
  };

  handleSubmit = ev => {
    const { addTask } = this.props;
    ev.preventDefault();
    addTask(this.state);
    this.setState({
      text: ""
    });
  };

  handleChange = ev => {
    const { type } = this.props;
    const { value } = ev.target;
    if (value.length < limits.max)
      return this.setState({
        text: value,
        type: type
      });
  };

  isValidField = () => this.state.text.length >= limits.min;

  getClassName = () =>
    this.isValidField()
      ? "add-card-form__main"
      : "add-card-form__main-error add-card-form__main";
}

const limits = {
  min: 5,
  max: 100
};

export default connect(
  null,
  { addTask }
)(Form);
