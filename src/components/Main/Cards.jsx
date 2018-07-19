import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
import Form from "./Form.jsx";
import ClassNames from "classnames";


class Cards extends React.Component {
  render() {
    const { name, type } = this.props;
    const classes = ClassNames("card-wrapper", type);

    return (
      <div className={classes}>
        <div className="card-wrapper__header">
          <div className="backlog-name">{name}</div>
          <div className="backlog-dots">
            <i className="material-icons">expand_more</i>
          </div>
        </div>
        <div className="cards">
          <Card />
          <Add />
          <Form />
        </div>
      </div>
    );
  }
}

export default Cards;
