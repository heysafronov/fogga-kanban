import React from "react";
import ClassNames from "classnames";
import { connect } from "react-redux";
import { deleteTask } from "../../actions/";

class Card extends React.PureComponent {
  state = {
    dragging: false
  };

  render() {
    const { data } = this.props;
    const { dragging } = this.state;
    const style = ClassNames("card-container-color", data.style);
    const dragAndDrop = ClassNames({
      card: true,
      "card-dragging": dragging
    });
    return (
      <div
        className={dragAndDrop}
        draggable="true"
        onDragStart={this.forDragStart}
      >
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
              <img src={data.avatar} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  forDragStart = ev => {
    const { data } = this.props;
    this.onDragStart(ev, data.id);
  };

  onDragStart = (ev, id) => {
    this.setState(prevState => {
      return { dragging: !prevState.dragging };
    });
    ev.dataTransfer.setData("text/html", id);
  };

  handleDelete = () => {
    const { data, deleteTask } = this.props;
    deleteTask(data.id);
  };
}

export default connect(
  null,
  { deleteTask }
)(Card);
