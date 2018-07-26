import React from "react";

function dropping(Component) {
  class Dropping extends React.Component {
    state = {
      dropping: false
    };

    forDragOver = ev => {
      this.onDragOver(ev);
    };

    onDragOver = ev => {
      ev.preventDefault();
    };

    forDrop = ev => {
      const { type } = this.props;
      this.onDrop(ev, type);
    };

    onDragEnter = () => {
      this.setState(prevState => {
        return { dropping: !prevState.dropping };
      });
    };

    onDrop = (ev, cat) => {
      this.props.dragAndDrop(ev, cat);
      this.setState({
        dropping: false
      });
    };

    onDragLeave = () => {
      this.setState(prevState => {
        return { dropping: !prevState.dropping };
      });
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          forDragOver={this.forDragOver}
          onDragOver={this.onDragOver}
          forDrop={this.forDrop}
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
          onDragLeave={this.onDragLeave}
        />
      );
    }
  }
  Dropping.displayName = `Dropping(${Component.displayName ||
    Component.name ||
    "Cards"})`;
  return Dropping;
}

export default dropping;
