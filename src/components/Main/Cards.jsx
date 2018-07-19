import React from "react";
import Card from "./Card.jsx";

class Cards extends React.Component {
  render() {
    return (
      <div className="card-wrapper backlog-color">
        <div className="card-wrapper__header">
          <div className="backlog-name">Backlog</div>
          <div className="backlog-dots"><i
            className="material-icons">expand_more</i></div>
        </div>
        <div className="cards">
          <Card />
        </div>
      </div>
    );
  }
}

export default Cards;
