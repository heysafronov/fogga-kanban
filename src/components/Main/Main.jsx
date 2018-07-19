import React from "react";
import Cards from "./Cards.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    const { board } = this.props;
    const close = ClassNames("kanban__main-wrapper", "kanban__main-wrapper-close");

    return (
      <section className="kanban__main">
        <div className={board ? "kanban__main-wrapper" : close}>
          <Cards name="Backlog" type="backlog-color" />
          <Cards name="In Progress" type="in-progress-color" />
          <Cards name="Review" type="review-color" />
          <Cards name="Complete" type="complete-color" />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board
});

export default connect(mapStateToProps)(Main);
