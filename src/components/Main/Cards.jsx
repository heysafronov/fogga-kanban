import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
import Form from "./Form.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";


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
          {this.getData}
          <Add />
          <Form />
        </div>
      </div>
    );
  }

  get getData() {
    const { data } = this.props;
    return data.map(item =>
      (<div key={item.id}>
        <Card data={item}/>
      </div>)
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Cards);
