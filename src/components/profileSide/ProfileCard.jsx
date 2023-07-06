import Cover from "../../assets/cover.jpg";
import Profile from "../../assets/profileImg.jpg";

const ProfileCard = () => {
  const profilePqge = true;
  return (
    <div className="profile__card w-full bg-cardColor flex flex-col gap-4 rounded-3xl overflow-x-clip z-20">
      <div className="w-full max-h-44 relative flex flex-col items-center justify-center">
        <img src={Cover} alt="" className="w-full h-full object-cover" />
        <img
          src={Profile}
          alt=""
          className="w-28 rounded-full absolute -bottom-12 shadow-sm shadow-profileShadow"
        />
      </div>
      <div className="w-full  flex flex-col items-center mt-12 gap-1 font-bold">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="w-full followStatus">
        <hr className="w-[85%] mx-auto" />
        <div className="w-10/12 mx-auto flex items-center justify-around gap-3 py-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold">6,890</span>
            <span className="text-gray text-sm">Followings</span>
          </div>
          <hr className="bg-red-100 w-2/12 h-full rotate-90" />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold">1</span>
            <span className="text-gray text-sm">Followers</span>
          </div>
          {profilePqge && (
            <>
              <hr className="bg-red-100 w-2/12 h-full rotate-90" />
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="font-bold">3</span>
                <span className="text-gray text-sm">Posts</span>
              </div>
            </>
          )}
        </div>
        <hr className="w-[85%] mx-auto" />
      </div>
      {profilePqge ? (
        ""
      ) : (
        <div className="w-full text-center text-orange font-bold mb-4 cursor-pointer ">
          My Profile
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
