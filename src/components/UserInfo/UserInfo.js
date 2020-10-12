import React from "react"
import Avatar from "components/Avatar/Avatar"

function UserInfo({name, lastName, userOccupation}) {
  return (
    <>
      <Avatar/>
      <div className="content-profile-info">
        <span className="profile-name">{`${name} ${lastName}`}</span>
        <span className="profile-role">{`${userOccupation}`}</span>
      </div>
    </>
  )
}

export default UserInfo