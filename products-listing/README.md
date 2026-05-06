# Product Listing App

`Products` is a modern product listing interface built with React, Vite, and Tailwind CSS. It fetches product data from the FreeAPI and displays it in a professional grid layout.

## Live Demo

**[View Live Site 🌐](https://products-listing-vista.netlify.app/)**

## Features

- Real-time Data Fetching: Retrieves products from a public API.
- Responsive Grid: Optimized layout for mobile, tablet, and desktop screens.
- Smart Search: Instant client-side filtering by product title, brand, or category.
- Custom Pagination: Navigation through multiple pages of results.
- Stats Dashboard: Overview of total items, categories, and ratings on the current page.
- Modular Architecture: Component-based structure.
- Premium UI: Features skeleton loaders and smooth fade-in transitions.

## Tech Stack

- Core: React 19
- Build Tool: Vite
- Styling: Tailwind CSS
- Data Source: FreeAPI Public Products Endpoint
- Typography: Inter

## Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Header.jsx       # Navigation and search bar
│   ├── StatsRibbon.jsx  # Page metadata indicators
│   ├── ProductGrid.jsx  # Grid wrapper with skeleton logic
│   ├── ProductCard.jsx  # Individual item card
│   ├── Pagination.jsx   # Numbered navigation
│   ├── EmptyState.jsx   # No results view
│   ├── ErrorState.jsx   # API error fallback
│   └── Footer.jsx       # Footer
├── hooks/
│   └── useProducts.js   # Custom hook for API & pagination state
├── App.jsx              # Main orchestrator
├── App.css              # Component-specific styles
└── index.css            # Global Tailwind entry point
```

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/AsifKhan-tech/React-projects/tree/main/products-listing
   ```

2. Install dependencies:

   ```bash
   cd products-listing
   npm i
   ```

3. Run locally:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```
5. Open browser and see at: `http://localhost:5173`.
