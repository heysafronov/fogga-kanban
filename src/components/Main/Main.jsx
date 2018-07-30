import React from "react";
import Cards from "./Cards.jsx";
import Select from "./Select.jsx";
import Button from "./Button.jsx";
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
    const { board, backlog, progress, review, complete, selected } = this.props;
    if (board) {
      return (
        <React.Fragment>
          <div
            className={
              selected ? "kanban__main-wrapper-opacity" : "kanban__main-wrapper"
            }
          >
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
          <Button />
          <Select />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  board: state.board,
  selected: state.selected,
  backlog: filtratedTasksBacklog(state),
  progress: filtratedTasksProgress(state),
  review: filtratedTasksReview(state),
  complete: filtratedTasksComplete(state)
});

export default connect(mapStateToProps)(Main);
