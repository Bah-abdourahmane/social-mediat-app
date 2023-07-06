import React, { useState } from "react";
import LogoSearch from "../profileSide/LogoSearch";
import FollowersCards from "../profileSide/FollowersCards";
import { BsPencil } from "react-icons/bs";
import { ProfileModal } from "./ProfileModal";

const ProfileLeft = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <LogoSearch />
      <div className="infoCard flex flex-col gap-3 bg-cardColor p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Your Info</h3>
          <div className="p-2">
            <BsPencil className="cursor-pointer" onClick={() => setModalOpened(true)} />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </div>
        </div>
        <div className="space-x-2">
          <span>
            <b>Status</b>
          </span>
          <span>In RelationShip</span>
        </div>
        <div className="space-x-2">
          <span>
            <b>Lives in</b>
          </span>
          <span>Morocco</span>
        </div>
        <div className="space-x-2">
          <span>
            <b>Works at</b>
          </span>
          <span>BahIndustry</span>
        </div>
        <button className="btnbg w-28 py-2 self-end mt-8">LogOut</button>
      </div>
      <FollowersCards />
    </div>
  );
};

export default ProfileLeft;
