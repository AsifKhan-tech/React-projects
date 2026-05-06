import React from "react";

const formatViews = (views) => {
  if (!views) return "0";
  const num = parseInt(views);
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
};

const VideoCard = ({ video }) => {
  const { id, thumbnails, title, channelTitle, viewCount, publishedAt } = video;
  
  // Simple relative time calculation (mocked for simplicity or basic date diff)
  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return "just now";
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays}d ago`;
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths}mo ago`;
    return `${Math.floor(diffInMonths / 12)}y ago`;
  };

  return (
    <a 
      href={`https://www.youtube.com/watch?v=${id}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col gap-3 group cursor-pointer no-underline text-inherit"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-yt-hover">
        <img 
          src={thumbnails?.high?.url || thumbnails?.medium?.url} 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium">
          {video.duration?.replace('PT', '').toLowerCase() || "12:34"}
        </div>
      </div>
      
      {/* Video Info */}
      <div className="flex gap-3 px-1">
        {/* Channel Avatar Placeholder */}
        <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white">
          {channelTitle?.charAt(0)}
        </div>
        
        <div className="flex flex-col overflow-hidden">
          <h3 className="font-bold text-[15px] leading-tight line-clamp-2 group-hover:text-white/90">
            {title}
          </h3>
          <p className="text-yt-gray text-sm mt-1 hover:text-white transition-colors">
            {channelTitle}
          </p>
          <div className="text-yt-gray text-sm flex items-center gap-1">
            <span>{formatViews(viewCount)} views</span>
            <span className="text-[8px]">•</span>
            <span>{getTimeAgo(publishedAt)}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
