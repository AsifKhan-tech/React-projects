import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-3 animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="aspect-video w-full bg-yt-hover rounded-xl"></div>
      
      {/* Info Skeleton */}
      <div className="flex gap-3 px-1">
        <div className="w-10 h-10 bg-yt-hover rounded-full flex-shrink-0"></div>
        <div className="flex flex-col gap-2 w-full">
          <div className="h-4 bg-yt-hover rounded w-[90%]"></div>
          <div className="h-3 bg-yt-hover rounded w-[60%]"></div>
          <div className="h-3 bg-yt-hover rounded w-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
