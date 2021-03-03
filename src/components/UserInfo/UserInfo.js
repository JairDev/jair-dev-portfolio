import React from "react";
import "./UserInfo.css";

function UserInfo({ name, lastName, userOccupation }) {
  return (
    <>
      <div className="content-profile-info">
        <span className="profile-name">{`${name} ${lastName}`}</span>
        <span className="profile-role">{`${userOccupation}`}</span>
      </div>
    </>
  );
}

export default UserInfo;
