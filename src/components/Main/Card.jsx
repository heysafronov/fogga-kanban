import React from "react";
import ClassNames from "classnames";
import { connect } from "react-redux";
import { deleteTask } from "../../actions/";

class Card extends React.Component {
  render() {
    const { data } = this.props;
    const style = ClassNames("card-container-color", data.style);
    return (
      <div className="card">
        <div className="card__header">
          <div className={style}>
            <div className="card__header-priority">{data.priority}</div>
          </div>
          <div onClick={this.handleDelete} className="card__header-clear">
            <i className="material-icons">clear</i>
          </div>
        </div>
        <div className="card__text">{data.text}</div>
        <div className="card__menu">
          <div className="card__menu-left">
            <div className="comments-wrapper">
              <div className="comments-ico">
                <i className="material-icons">comment</i>
              </div>
              <div className="comments-num">{data.comments}</div>
            </div>
            <div className="attach-wrapper">
              <div className="attach-ico">
                <i className="material-icons">attach_file</i>
              </div>
              <div className="attach-num">{data.attach}</div>
            </div>
          </div>
          <div className="card__menu-right">
            <div className="add-peoples">
              <i className="material-icons">add</i>
            </div>
            <div className="img-avatar">
              <img src={require("../../assets/img/thompson.jpg")} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleDelete = () => {
    const { data, deleteTask } = this.props;
    deleteTask(data.id);
  };
}

export default connect(
  null,
  { deleteTask }
)(Card);
