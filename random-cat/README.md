# 🐱 Meow Viewer

A beautiful, responsive Random Cat Viewer built with React. Discover different cat breeds with a single click — view their images, origin, lifespan, temperament, and Wikipedia links, all fetched dynamically from the [FreeAPI Cat API](https://api.freeapi.app/api/v1/public/cats/cat/random).

## Live Demo

[https://meow-viewer-peach.vercel.app/](https://meow-viewer-peach.vercel.app/)

## Features

- **Random Cat Generator** — Fetch a new random cat breed with one click
- **Breed Details** — Displays name, origin, lifespan, description, and temperament
- **Wikipedia Link** — Quick link to learn more about each breed
- **Clean UI** — Minimalist, modern design with smooth hover animations
- **Responsive** — Works seamlessly on desktop and mobile
- **Loading & Error States** — Skeleton loaders and graceful error handling

## Tech Stack

- **React** — Component-based UI
- **Vite** — Fast dev server and build tool
- **Tailwind CSS v4** — Utility-first styling
- **FreeAPI** — Random cat data source

## Project Structure

```
src/
├── components/
│   ├── CatImage.jsx         # Cat image display with loading/error states
│   ├── CatDetails.jsx       # Breed info, temperament tags, Wikipedia link
│   ├── LoadingSkeleton.jsx   # Pulsing placeholder while data loads
│   └── ErrorState.jsx        # Error message with retry button
├── App.jsx                   # Main app with API fetching logic
├── App.css
├── index.css                 # Tailwind imports & custom animations
└── main.jsx
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/babitakry/meow-viewer.git
cd meow-viewer

# Install dependencies
npm install

# Start the dev server
npm run dev
```



