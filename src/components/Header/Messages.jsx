import React from "react";

class Messages extends React.Component {
  render() {
    return (
      <div className="mail-icon">
        <i className="material-icons">mail_outline</i>
        <div className="mail-icon__notification">No messages</div>
      </div>
    );
  }
}

export default Messages;
