import React from "react";

class Notification extends React.Component {
  render() {
    return (
      <div className="notification-icon">
        <i className="material-icons">notifications_none</i>
        <div className="notification-icon__alert" />
        <div className="notification-icon__not">
          <div className="notification-author">
            <img src={require("../../assets/img/cobain.jpg")} />
            <span>@Victoria:</span>
          </div>
          <div className="notification-text">
            Stream Bomb Has Been Planted by Liquor Jim from desktop or your
            mobile device.
          </div>
        </div>
      </div>
    );
  }
}

export default Notification;
