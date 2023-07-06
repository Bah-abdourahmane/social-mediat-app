import ProfileImg from "../../assets/ProfileImg.jpg";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const ImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({ image: URL.createObjectURL(img) });
    }
  };
  return (
    <div className="w-full flex flex-col gap-4 bg-cardColor rounded-2xl p-4 z-20">
      <div className="w-full flex items-center gap-4">
        <img
          src={ProfileImg}
          alt=""
          className="w-12 rounded-full object-cover shrink-0"
        />
        <div className="w-full">
          <input
            type="text"
            placeholder="What's happening"
            className="outline-none bg-inputColor rounded-xl p-3 w-full"
          />
        </div>
      </div>
      <div className="w-full justify-end flex items-center gap-5">
        <div
          className="flex items-center gap-1 cursor-pointer text-photo"
          onClick={() => imageRef.current.click()}
        >
          <BsImage className="text-xl xl:text-2xl" />
          <span className="text-sm md:text-xs font-semibold">Photo</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer text-video">
          <AiOutlinePlayCircle className="text-xl xl:text-2xl" />
          <span className="text-sm md:text-xs font-semibold">Video</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer text-location">
          <HiOutlineLocationMarker className="text-xl xl:text-2xl" />
          <span className="text-sm md:text-xs font-semibold">Location</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer text-shedule">
          <BiCalendar className="text-xl xl:text-2xl" />
          <span className="text-sm md:text-xs font-semibold">Schedule</span>
        </div>
        <button className="btnbg px-5 py-2">Share</button>
        <div className="hidden">
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={ImageChange}
          />
        </div>
      </div>
      {image && (
        <div className="relative">
          <FaTimes className="text-xl absolute right-4 top-2 cursor-pointer" onClick={()=> setImage(null)} />
          <img src={image.image} alt="" className="w-full h-full max-h-80 object-contain" />
        </div>
      )}
    </div>
  );
};

export default PostShare;
