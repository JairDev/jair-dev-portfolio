import React from "react";
import UserInfo from "components/UserInfo/UserInfo";
import SocialMedia from "components/SocialMedia/SocialMedia";
import IterateArray from "components/IterateArray/IterateArray";
import { socialMedia } from "data/info-portfolio";
import "./ProfileCard.css";

function ProfileCard({ name, lastName, userOccupation }) {
  return (
    <>
      <div className="content-profile">
        <UserInfo
          name={name}
          lastName={lastName}
          userOccupation={userOccupation}
        />
        <div className="content-profile-social-media">
          <IterateArray
            array={socialMedia}
            Component={SocialMedia}
            type={"socialMedia"}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileCard;

