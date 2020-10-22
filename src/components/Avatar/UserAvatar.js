import Avatar  from "avataaars"
import React from "react"
import "./UserAvatar.css"

function UserAvatar() {

  return(
    <div className="content-profile-avatar">
       <img alt="" src=""/>
       <Avatar
          avatarStyle='Transparent'
          topType='ShortHairShortCurly'
          accessoriesType='Blank'
          hairColor='Black'
          facialHairType='Blank'
          clotheType='CollarSweater'
          clotheColor='Blue02'
          eyeType='WinkWacky'
          eyebrowType='RaisedExcited'
          mouthType='Default'
          skinColor='Light'
        />
    </div>
  )
}

export default UserAvatar