import React from "react";
import Cards from "./Cards.jsx";

class Main extends React.Component {
  render() {
    return (
      <section className="kanban__main">
        <div className="kanban__main-wrapper">
          <Cards name="Backlog" type="backlog-color" />
          <Cards name="In Progress" type="in-progress-color" />
          <Cards name="Review" type="review-color" />
          <Cards name="Complete" type="complete-color" />
        </div>
      </section>
    );
  }
}

export default Main;
