import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";
import { dragAndDrop } from "../../actions/";

class Cards extends React.PureComponent {
  state = {
    openCards: true,
    dropping: false
  };

  render() {
    const { openCards } = this.state;
    const { name, style } = this.props;
    const classes = ClassNames({
      "card-wrapper": true,
      "cards-dropping": this.state.dropping
    });
    const styleClass = ClassNames(style);
    return (
      <div
        className={styleClass + " " + classes}
        onDragOver={this.forDragOver}
        onDrop={this.forDrop}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
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
      <div className="cards">
        {this.cardsList}
        <Add typeCards={type} />
      </div>
    );
  }

  forDragOver = ev => {
    this.onDragOver(ev);
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  forDrop = ev => {
    const { type } = this.props;
    this.onDrop(ev, type);
  };

  onDragEnter = () => {
    this.setState(prevState => {
      return { dropping: !prevState.dropping };
    });
  };

  onDrop = (ev, cat) => {
    this.props.dragAndDrop(ev, cat);
    this.setState({
      dropping: false
    });
  };

  onDragLeave = () => {
    this.setState(prevState => {
      return { dropping: !prevState.dropping };
    });
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

export default connect(
  null,
  { dragAndDrop }
)(Cards);
