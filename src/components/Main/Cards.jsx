import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
import ClassNames from "classnames";
import toggleAdd from "../../hoc/toggle.jsx";


class Cards extends React.PureComponent {
  render() {
    console.log('render');
    const { name, style } = this.props;
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
          {this.getData}
          <Add typez={this.props.type} />
        </div>
      </div>
    );
  }

  get getData() {
    const { data } = this.props;
    let allCards = data.map(item =>
      (<div key={item.id}>
        <Card data={item}/>

      </div>)
    );
    return (
      allCards
    )

  }
}

{/*<Add item={item} toggleOpenItem={this.props.toggleOpenItem} isOpen={this.props.openItemType === item.type} typez={this.props.type}/>*/}

export default toggleAdd(Cards);

