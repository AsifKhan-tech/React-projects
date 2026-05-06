import React from "react";

const SidebarItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-5 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${active ? 'bg-yt-hover font-bold' : 'hover:bg-yt-hover'}`}>
    {icon}
    <span className="text-[14px]">{label}</span>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-14 bottom-0 w-60 bg-yt-bg px-2 py-3 overflow-y-auto hidden lg:block scrollbar-hide">
      <div className="flex flex-col border-b border-[#303030] pb-3 mb-3">
        <SidebarItem 
          active
          label="Home" 
          icon={<svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M4 10V21h6V15h4v6h6V10l-8-7z"></path></svg>} 
        />
        <SidebarItem 
          label="Shorts" 
          icon={<svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M10 14.65v-5.3L15 12l-5 2.65zM14.55 3.1c.85.14 1.55.8 1.75 1.66l.6 2.53 1.2.15c.91.11 1.62.83 1.76 1.74l.43 2.7.11 3.16c0 .96-.71 1.8-1.67 1.95l-9.46 1.51c-.96.15-1.87-.45-2.09-1.4l-.5-2.2-.1-3.2c-.01-.96.69-1.8 1.65-1.97l9.31-1.63z"></path></svg>} 
        />
        <SidebarItem 
          label="Subscriptions" 
          icon={<svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M20 7H4V5h16v2zm2 12H2V9h20v10zM18 11H6v6h12v-6z"></path></svg>} 
        />
      </div>

      <div className="flex flex-col border-b border-[#303030] pb-3 mb-3">
        <h3 className="px-3 py-2 font-bold text-[16px]">You</h3>
        <SidebarItem 
          label="Your channel" 
          icon={<svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>} 
        />
        <SidebarItem 
          label="History" 
          icon={<svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>} 
        />
        <SidebarItem 
          label="Playlists" 
          icon={<svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M3.6 14.5h6.4v-6.4H3.6v6.4zm10.4 0h6.4v-6.4h-6.4v6.4zm-10.4 10.4h6.4v-6.4H3.6v6.4zm10.4 0h6.4v-6.4h-6.4v6.4z"></path></svg>} 
        />
        <SidebarItem 
          label="Your videos" 
          icon={<svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M10 8v8l6-4-6-4z"></path></svg>} 
        />
        <SidebarItem 
          label="Watch later" 
          icon={<svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></svg>} 
        />
      </div>

      <div className="flex flex-col">
        <h3 className="px-3 py-2 font-bold text-[16px]">Subscriptions</h3>
        <SidebarItem label="Hitesh Choudhary" icon={<div className="w-6 h-6 rounded-full bg-blue-500"></div>} />
        <SidebarItem label="Traversy Media" icon={<div className="w-6 h-6 rounded-full bg-red-500"></div>} />
        <SidebarItem label="Web Dev Simplified" icon={<div className="w-6 h-6 rounded-full bg-green-500"></div>} />
      </div>
    </aside>
  );
};

export default Sidebar;
