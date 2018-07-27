import React from "react";

class Child extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="kanban__nav">
          <div className="kanban__nav-wrapper">
            <div className="kanban__nav-name">
              <div className="kanban-name">Studio Manage</div>
            </div>
          </div>
        </section>
        <section className="kanban__main">
          <div className="kanban__main-wrapper" />
        </section>
      </React.Fragment>
    );
  }
}

export default Child;
