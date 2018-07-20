import React from "react";

function toggleAdd(Component) {
  class Toggle extends React.Component {
    state = {
      openItemId: null
    };

    toggleOpenItem = (openItemId) => this.setState({openItemId: this.state.openItemId ? null : openItemId});

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
  Toggle.displayName = `Toggle(${Component.displayName || Component.name || 'Cards'})`;
  return Toggle;
}

export default toggleAdd;
