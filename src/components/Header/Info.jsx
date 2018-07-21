import React from "react";

class Info extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="name-user">M. Thompson</div>
        <div className="avatar-user">
          <img src={require("../../assets/img/thompson.jpg")} />
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
