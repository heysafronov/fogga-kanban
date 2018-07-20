import React from "react";
import {connect } from "react-redux";
import {addTask} from "../../actions/"

class Form extends React.Component {
  state = {
    id: "8tlgjfek",
    type: "backlog",
    priority: "low",
    user: "C. Guvert",
    text: "",
    avatar: "/src/assets/img/guvert.jpg",
    attach: "2",
    comments: "1"
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-card-form add-card-form-true">
        <div className="add-card-form__header">
          <div className="from__low-pr">Low Priority</div>
          <div className="from__med-pr">Med Priority</div>
          <div className="from__high-pr">High Priority</div>
        </div>
        <textarea className="add-card-form__main" type="text"
                  placeholder="Write your task" value={this.state.text} onChange={this.handleChange }/>
        <div className="add-card-form__footer">
          <div className="form__footer">
            <div className="form__footer-av"><img src={require("../../assets/img/thompson.jpg")}/>
            </div>
            <div className="attach-ico"><i
              className="material-icons">attach_file</i></div>
          </div>
          <div className="form__del"><i className="material-icons">clear</i>
          </div>
          <input className="form-add-btn" type="submit" value="Add" />
        </div>
      </form>
    );
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addTask(this.state);
  };

  handleChange = (ev) => {
    this.setState({text: ev.target.value});
  }
}


const mapStateToProps = (state) => ({
  tasks: state.tasks
});


export default connect(mapStateToProps, {addTask})(Form);
