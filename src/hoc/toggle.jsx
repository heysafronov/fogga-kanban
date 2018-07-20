import React from "react";

function toggleAdd(Component) {
  class Toggle extends React.Component {
    state = {
      openItemType: null
    };

    toggleOpenItem = (openItemType) => {
      this.setState({openItemType: this.state.openItemType ? null : openItemType});
    };

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
