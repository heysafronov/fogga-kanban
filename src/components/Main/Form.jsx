import React from "react";
import ClassNames from "classnames";
import { connect } from "react-redux";
import { addTask } from "../../actions/";

class Form extends React.Component {
  state = {
    id: "",
    type: "",
    priority: "low",
    user: "M. Thompson",
    text: "",
    avatar: "./41aad055f35eb28f42b84ca1b4cf5d53.jpg",
    attach: "0",
    comments: "0"
  };

  render() {
    const { text } = this.state;
    // const errorS = ClassNames("add-card-form__main", "add-card-form__main-error");
    return (
      <form
        onSubmit={this.handleSubmit}
        className="add-card-form add-card-form-true"
      >
        <div className="add-card-form__header">
          <div className="from__low-pr">Low Priority</div>
          <div className="from__med-pr">Med Priority</div>
          <div className="from__high-pr">High Priority</div>
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
