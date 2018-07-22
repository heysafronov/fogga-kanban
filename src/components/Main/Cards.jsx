import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
import ClassNames from "classnames";

class Cards extends React.PureComponent {
  render() {
    const { name, style, type } = this.props;
    const classes = ClassNames("card-wrapper", style);
    return (
      <div className={classes}>
        <div className="card-wrapper__header">
          <div className="backlog-name">{name}</div>
          <div className="backlog-dots">
            <i className="material-icons">expand_more</i>
          </div>
        </div>
        <div className="cards">
          {this.CardsList}
          <Add typeCards={type} />
        </div>
      </div>
    );
  }

  get CardsList() {
    const { data } = this.props;
    return data.map(item => (
      <div key={item.id}>
        <Card data={item} />
      </div>
    ));
  }
}

export default Cards;
