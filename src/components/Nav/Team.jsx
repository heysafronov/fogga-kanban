import React from "react";
import Invite from "./Invite.jsx";

class Team extends React.Component {
  render() {
    return (
      <div className="kanban__nav-avs">
        <div className="kanban__nav-avs-img">
          <img src={require("../../assets/img/guvert.jpg")} />
        </div>
        <div className="kanban__nav-avs-img">
          <img src={require("../../assets/img/thompson.jpg")} />
        </div>
        <div className="kanban__nav-avs-img">
          <img src={require("../../assets/img/nilson.jpg")} />
        </div>
        <div className="kanban__nav-avs-img">
          <img src={require("../../assets/img/cobain.jpg")} />
        </div>
        <Invite />
      </div>
    );
  }
}

export default Team;
