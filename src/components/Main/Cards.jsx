import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
// import Form from "./Form.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";
// import toggleAdd from "../../hoc/toggle.jsx";
// import {isOpen} from "../../actions";


class Cards extends React.PureComponent {
  state = {
    openItemType: null
  };


  toggleOpenItem = (openItemType) => {
    this.setState({openItemType: this.state.openItemType ? null : openItemType});
  };

  render() {
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

        </div>
      </div>
    );
  }

  get getData() {
    const { data } = this.props;
    return data.map(item =>
      (<div key={item.id}>
        <Card data={item}/>
        <Add item={item} toggleOpenItem={this.toggleOpenItem} isOpen={this.state.openItemType === item.type}/>

      </div>)
    )
  }
}

// const mapStateToProps = (state) => ({
//   isOpenA: state.isOpen
// });

export default Cards;

