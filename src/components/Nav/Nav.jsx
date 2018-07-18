import React from "react";
import Title from "./Title.jsx";
import Team from "./Team.jsx";

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
