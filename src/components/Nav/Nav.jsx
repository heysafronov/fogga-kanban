import React from "react";
import Team from "./Team.jsx";
import Title from "./Title.jsx";

class Nav extends React.Component {
  render() {
    return (
      <section className="kanban__nav">
        <div className="kanban__nav-wrapper">
          <Title />
          <Team />
        </div>
      </section>
    );
  }
}

export default Nav;
