import React from "react";

class Invite extends React.Component {
  render() {
    return (
      <div className="kanban__nav-avs-add">
        <div className="kanban__nav-avs-invite">
          <form>
            <input
              type="email"
              placeholder="invite email"
              className="invite-email"
            />
            <button className="invite-btn">Send</button>
          </form>
        </div>
        <i className="material-icons">add</i>
      </div>
    );
  }
}

export default Invite;
