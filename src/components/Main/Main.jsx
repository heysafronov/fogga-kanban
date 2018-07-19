import React from "react";
import Cards from "./Cards.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";
import {
  filtratedTasksBacklog,
  filtratedTasksProgress,
  filtratedTasksReview,
  filtratedTasksComplete
} from "../../selectors/";


class Main extends React.Component {
  render() {
    const { board, backlog, progress, review, complete } = this.props;
    const close = ClassNames("kanban__main-wrapper", "kanban__main-wrapper-close");
    return (
      <section className="kanban__main">
        <div className={board ? "kanban__main-wrapper" : close}>
          <Cards name="Backlog" type="backlog-color" data={backlog}/>
          <Cards name="In Progress" type="in-progress-color" data={progress}/>
          <Cards name="Review" type="review-color" data={review}/>
          <Cards name="Complete" type="complete-color" data={complete}/>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board,
  backlog: filtratedTasksBacklog(state),
  progress: filtratedTasksProgress(state),
  review: filtratedTasksReview(state),
  complete: filtratedTasksComplete(state)
});

export default connect(mapStateToProps)(Main);
