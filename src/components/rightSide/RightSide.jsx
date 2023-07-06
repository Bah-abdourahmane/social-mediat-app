import HomeIcon from "../../assets/home.png";
import Comment from "../../assets/comment.png";
import Notifiction from "../../assets/noti.png";
import { IoSettingsOutline } from "react-icons/io5";
import TrendCard from "./TrendCard";
import { ShareModal } from "./ShareModal";
import { useState } from "react";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="w-full flex flex-col gap-8 z-20">
      <div className="flex items-center justify-between">
        <img src={HomeIcon} alt="" className="w-6 cursor-pointer" />
        <IoSettingsOutline className="text-2xl cursor-pointer" />
        <img src={Notifiction} alt="" className="w-6 cursor-pointer" />
        <img src={Comment} alt="" className="w-6 cursor-pointer" />
      </div>
      <TrendCard />
      <button
        className="btnbg py-2 tracking-wider"
        onClick={() => setModalOpened(true)}
      >
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
