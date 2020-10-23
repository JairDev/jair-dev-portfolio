import Avatar  from "avataaars"
import React from "react"
import "./UserAvatar.css"

function UserAvatar() {

  return(
    <>
      <div className="content-profile-avatar">
        <img alt="" src=""/>
        <Avatar
          avatarStyle='Transparent'
          topType='ShortHairDreads02'
          accessoriesType='Blank'
          hairColor='Black'
          facialHairType='Blank'
          clotheType='BlazerShirt'
          eyeType='Happy'
          eyebrowType='DefaultNatural'
          mouthType='Default'
          skinColor='Light'
        />
      </div>
      <span className="profile-border"></span>
    </>
  )
}

export default UserAvatar