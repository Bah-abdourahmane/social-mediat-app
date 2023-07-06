import React from "react";
import ProfileCard from "../profileSide/ProfileCard";
import PostShare from "../postSide/PostShare";
import PostCard from "../postSide/PostCard";

const ProfileMiddle = () => {
  return (
    <div className="profilePage w-full h-screen flex flex-col gap-4 overflow-auto">
      <ProfileCard />
      <PostShare />
      <PostCard />
    </div>
  );
};

export default ProfileMiddle;
