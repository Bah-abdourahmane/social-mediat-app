import { PostsData } from "../../dummy";
import Commemt from "../../assets/comment.png";
import Share from "../../assets/share.png";
import Heart from "../../assets/like.png";
import NoteLike from "../../assets/notlike.png";

const PostCard = () => {
  return (
    <div className="postCard flex flex-col gap-4">
      {PostsData.map((data, id) => (
        <div
          key={id}
          className="bg-cardColor flex flex-col p-4 rounded-2xl gap-4"
        >
          <div className="w-full h-full max-h-80">
            <img src={data.img} alt="" className="w-full h-full rounded-lg" />
          </div>
          <div className="flex items-center gap-6">
            <img src={data.liked ? Heart : NoteLike} alt="" />
            <img src={Commemt} alt="" />
            <img src={Share} alt="" />
          </div>
          <span>{data.likes} Likes</span>
          <div className="space-x-2">
            <span>
              <b>{data.name}</b>
            </span>
            <span>{data.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
