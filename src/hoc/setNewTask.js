import React from "react";

function setNewTask(Component) {
  class SetNewTask extends React.Component {
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

    handleOption = ev => {
      const { value, alt } = ev.target;
      this.setState({
        style: value,
        priority: alt
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

    isValidField = () => {
      const { text, priority } = this.state;
      return text.length >= limits.min && priority;
    };

    getClassName = () => {
      const { text } = this.state;
      return text.length >= limits.min
        ? "add-card-form__main"
        : "add-card-form__main-error add-card-form__main";
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          handleOption={this.handleOption}
          handleChange={this.handleChange}
          isValidField={this.isValidField}
          getClassName={this.getClassName}
        />
      );
    }
  }
  SetNewTask.displayName = `SetNewTask(${Component.displayName ||
    Component.name ||
    "Form"})`;
  return SetNewTask;
}

const limits = {
  min: 5,
  max: 100
};

export default setNewTask;
