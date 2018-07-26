import React from "react";
import Cards from "./Cards.jsx";
import { connect } from "react-redux";
import {
  filtratedTasksBacklog,
  filtratedTasksProgress,
  filtratedTasksReview,
  filtratedTasksComplete
} from "../../selectors/";
import CSSTransition from "react-addons-css-transition-group";

class Main extends React.Component {
  render() {
    return (
      <section className="kanban__main">
        <CSSTransition
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.cardsList}
        </CSSTransition>
      </section>
    );
  }

  get cardsList() {
    const { board, backlog, progress, review, complete } = this.props;
    if (board) {
      return (
        <div className="kanban__main-wrapper">
          <Cards
            name="Backlog"
            style="backlog-color"
            type="backlog"
            data={backlog}
          />
          <Cards
            name="In Progress"
            style="in-progress-color"
            type="progress"
            data={progress}
          />
          <Cards
            name="Review"
            style="review-color"
            type="review"
            data={review}
          />
          <Cards
            name="Complete"
            style="complete-color"
            type="complete"
            data={complete}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  board: state.board,
  backlog: filtratedTasksBacklog(state),
  progress: filtratedTasksProgress(state),
  review: filtratedTasksReview(state),
  complete: filtratedTasksComplete(state)
});

export default connect(mapStateToProps)(Main);
