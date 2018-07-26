import React from "react";

function dragging(Component) {
  class Dragging extends React.Component {
    state = {
      dragging: false
    };

    forDragStart = ev => {
      const { data } = this.props;
      this.onDragStart(ev, data.id);
    };

    onDragStart = (ev, id) => {
      this.setState(prevState => {
        return { dragging: !prevState.dragging };
      });
      ev.dataTransfer.setData("text/html", id);
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          forDragStart={this.forDragStart}
          onDragStart={this.onDragStart}
        />
      );
    }
  }
  Dragging.displayName = `Dragging(${Component.displayName ||
    Component.name ||
    "Card"})`;
  return Dragging;
}

export default dragging;
