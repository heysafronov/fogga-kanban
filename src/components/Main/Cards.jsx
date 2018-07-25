import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";
import { dragAndDrop } from "../../actions/";

class Cards extends React.PureComponent {
  state = {
    openCards: true
  };

  render() {
    const { openCards } = this.state;
    const { name, style } = this.props;
    const classes = ClassNames("card-wrapper", style);
    return (
      <div className={classes}>
        <div className="card-wrapper__header">
          <div className="backlog-name">{name}</div>
          <div onClick={this.handleToggle} className="backlog-dots">
            <i className="material-icons">
              {openCards ? "expand_more" : "chevron_right"}
            </i>
          </div>
        </div>
        {this.cardsContainer}
      </div>
    );
  }

  handleToggle = () => {
    return this.setState(prevState => {
      return { openCards: !prevState.openCards };
    });
  };

  get cardsContainer() {
    const { type } = this.props;
    const { openCards } = this.state;
    if (!openCards) {
      return null;
    }
    return (
      <div
        className="cards"
        onDragOver={e => this.onDragOver(e)}
        onDrop={e => {
          this.onDrop(e, this.props.data[0].type);
        }}
      >
        {this.cardsList}
        <Add typeCards={type} />
      </div>
    );
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    this.props.dragAndDrop(ev, cat);
  };

  get cardsList() {
    const { data } = this.props;
    return data.map(item => (
      <React.Fragment key={item.id}>
        <Card data={item} />
      </React.Fragment>
    ));
  }
}

export default connect(null, { dragAndDrop })(Cards);
