import React from "react";

class Form extends React.Component {
  render() {
    return (
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
            <div className="form__footer-av"><img src={require("../../assets/img/thompson.jpg")}/>
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

export default Form;
