import React from "react";
import LogoSearch from "./LogoSearch";
import ProfileCard from "./ProfileCard";
import FollowersCards from "./FollowersCards";

const ProfileSide = () => {
  return (
    <div className="profile__side flex flex-col gap-4">
      <LogoSearch />
      <ProfileCard />
      <FollowersCards />
    </div>
  );
};

export default ProfileSide;
