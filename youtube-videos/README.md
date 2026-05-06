# 📺 NovaTube - YouTube Style Video Listing UI

NovaTube is a professional, high-performance video listing interface built with React and Tailwind CSS. It leverages the FreeAPI YouTube endpoint to provide a real-world video browsing experience with features like category filtering, live search, and seamless pagination.

![NovaTube Preview](https://via.placeholder.com/1200x600/0f0f0f/ffffff?text=NovaTube+Video+Listing+UI)

## Features

- **Live Data Integration**: Fetches real video data (thumbnails, titles, view counts, and timestamps) from the YouTube API via FreeAPI.
- **Dynamic Search**: Instantly search for any video across the platform using the global search bar.
- **Category Filtering**: Quick-access filters for popular topics like Programming, Gaming, Music, and more.
- **Modern UI/UX**:
  - **Dark Mode**: Sleek `#0f0f0f` background for a premium feel.
  - **Responsive Grid**: Adapts from mobile to ultra-wide desktop views.
  - **Loading Skeletons**: Smooth pulse animations for a better perceived performance.
  - **Smooth Navigation**: Auto-scroll to top on page or category changes.
- **Direct Video Playback**: Each video card links directly to the actual YouTube video in a new tab.

## Technology Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS (v4)
- **API**: [FreeAPI YouTube Endpoint](https://api.freeapi.app/api/v1/public/youtube/videos)
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: SVG-based custom icons for maximum performance.

## Project Structure

```text
src/
├── components/     # Modular UI components (Navbar, Sidebar, Card, etc.)
├── hooks/          # Custom hooks for API integration (useVideos)
├── utils/          # Utility functions for formatting
├── App.jsx         # Main application logic
└── index.css       # Global styles and Tailwind configuration
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/babitakry/NovaTube.git
   cd NovaTube
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

