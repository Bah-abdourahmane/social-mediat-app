import React from "react";
import ProfileLeft from "../components/profilepage/ProfileLeft";
import ProfileRight from "../components/profilepage/ProfileRight";
import ProfileMiddle from "../components/profilepage/ProfileMiddle";

const Profile = () => {
  return (
    <div className="z-20 relative grid grid-cols-[20rem_minmax(auto,_1fr)_19rem] gap-5">
      <ProfileLeft />
      <ProfileMiddle />
      <ProfileRight />
    </div>
  );
};

export default Profile;
