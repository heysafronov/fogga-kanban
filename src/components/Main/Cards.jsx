import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
// import Form from "./Form.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";
// import toggleAdd from "../../hoc/toggle.jsx";


class Cards extends React.Component {
  state = {
    openItemId: null
  };


  toggleOpenItem = (openItemId) => {
    console.log('openItemId', openItemId);
    this.setState({openItemId: this.state.openItemId ? null : openItemId})
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
        <Add item={item} toggleOpenItem={this.toggleOpenItem} isOpen={this.state.openItemId === item.type}/>

      </div>)
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Cards);

