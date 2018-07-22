import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";
import { toggleCards } from "../../actions";

class Cards extends React.PureComponent {
  render() {
    const { name, style } = this.props;
    const classes = ClassNames("card-wrapper", style);
    return (
      <div className={classes}>
        <div className="card-wrapper__header">
          <div className="backlog-name">{name}</div>
          <div onClick={this.handleToggle} className="backlog-dots">
            <i className="material-icons">expand_more</i>
          </div>
        </div>
        {this.cardsContainer}
      </div>
    );
  }

  handleToggle = () => {
    const { toggleCards, type } = this.props;
    toggleCards(type);
  };

  get cardsContainer() {
    const { type, toggleCardsState } = this.props;
    if (type === toggleCardsState) {
      return null;
    }
    return (
      <div className="cards">
        {this.cardsList}
        <Add typeCards={type} />
      </div>
    );
  }

  get cardsList() {
    const { data } = this.props;
    return data.map(item => (
      <div key={item.id}>
        <Card data={item} />
      </div>
    ));
  }
}

const mapStateToProps = state => ({
  toggleCardsState: state.toggleCards
});

export default connect(
  mapStateToProps,
  { toggleCards }
)(Cards);
