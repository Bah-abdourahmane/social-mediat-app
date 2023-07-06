import { Followers } from "../../dummy";

const FollowersCards = () => {
  return (
    <div>
      <h3 className="font-bold text-xl text-center my-3 mb-6">
        Who is following you
      </h3>
      {Followers.map((follower, id) => (
        <div key={id} className="w-full rounded-xl flex items-center justify-between gap-4 text-sm mb-4">
          <div className="flex items-center gap-3">
            <img src={follower.img} alt="" className="w-14 rounded-full" />
            <div>
              <span className="font-bold block">{follower.name}</span>
              <span className="text-xs">@{follower.username}</span>
            </div>
          </div>
            <button className="btnbg px-5 tracking-wider font-semibold py-2">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCards;
