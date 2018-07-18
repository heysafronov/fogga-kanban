import React from "react";
import Invite from "./Invite.jsx";

class Team extends React.Component {
  render() {
    return (
      <div className="kanban__nav-avs">
        <div className="kanban__nav-avs-img"><img src="assets/img/av3.jpg" />
        </div>
        <div className="kanban__nav-avs-img"><img src="assets/img/av2.jpg" />
        </div>
        <div className="kanban__nav-avs-img"><img src="assets/img/av1.jpg" />
        </div>
        <div className="kanban__nav-avs-img"><img src="assets/img/av4.jpg" />
        </div>
        <Invite />
      </div>
    );
  }
}

export default Team;
