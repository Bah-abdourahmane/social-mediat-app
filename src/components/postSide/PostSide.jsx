import React from "react";
import PostShare from "./PostShare";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className="posts w-full h-screen flex flex-col gap-4 overflow-auto">
      <PostShare />
      <PostCard />
    </div>
  );
};

export default Posts;
