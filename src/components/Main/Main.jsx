import React from "react";
import Cards from "./Cards.jsx";

class Main extends React.Component {
  render() {
    return (
      <section className="kanban__main">
        <div className="kanban__main-wrapper">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
    );
  }
}

export default Main;
