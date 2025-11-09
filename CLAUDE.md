# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a multi-project repository containing experimental React and Next.js applications:

- **startrek-website**: A Create React App project using styled-components for theming
- **startrek-gallery**: A Create React App project with React Router and Axios for image galleries
- **carparts**: A Next.js 14 TypeScript project with interactive car parts diagrams
- **Mind Map**: Non-code project directory
- **Our winter trip 2024-2025**: Non-code project directory

## Project-Specific Commands

### startrek-website
```bash
cd startrek-website
npm start          # Development server on http://localhost:3000
npm test           # Run tests in watch mode
npm run build      # Production build
```

**Architecture:**
- Uses styled-components with theme provider pattern
- Theme configuration defines colors (primary, secondary, background, text) and fonts (main, title)
- Single-page layout with Header, Main, Footer components defined as styled components

### startrek-gallery
```bash
cd startrek-gallery
npm start          # Development server on http://localhost:3000
npm test           # Run tests in watch mode
npm run build      # Production build
```

**Architecture:**
- React Router DOM v6 with client-side routing
- Component structure:
  - `HomePage`: Landing page component
  - `ImageGallery`: Displays grid of images fetched via Axios
  - `ImageDetail`: Shows individual image details using URL params
- API integration pattern: useEffect hooks with Axios for data fetching
- Routes: `/` (home), `/gallery` (gallery), `/gallery/:id` (detail)

### carparts
```bash
cd carparts
npm run dev        # Development server on http://localhost:3000
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

**Architecture:**
- Next.js 14 with App Router and TypeScript
- Client Components pattern (uses "use client" directive)
- Single-page interactive diagram application
- Mouse event handling system for drag-and-drop functionality
- Coordinate-based positioning system (800x600 virtual canvas)
- Clipboard API integration for copying coordinates
- Image overlay system with draggable markers
- State management via React useState for part positions and drag state

**Key Implementation Pattern:**
The car parts diagram uses a coordinate mapping system where:
- Car parts are defined as objects with name, x, y coordinates
- Mouse events calculate positions relative to container dimensions
- Coordinates are normalized to a virtual 800x600 canvas
- Percentage-based positioning ensures responsive scaling
- Drag operations update state and copy coordinates to clipboard on release

## Dependencies Overview

**startrek-website:**
- React 18.3.1, React DOM
- styled-components 6.1.11 for CSS-in-JS
- react-icons 5.2.1 for icon components
- react-leaflet 4.2.1 (mapping library)
- react-scripts 3.0.1 (older version)

**startrek-gallery:**
- React 18.3.1, React DOM
- react-router-dom 6.24.1 for routing
- axios 1.7.2 for HTTP requests
- react-scripts 5.0.1

**carparts:**
- React 18, Next.js 14.2.5
- TypeScript 5
- Tailwind CSS 3.4.1 (configured but not actively used in main component)
- PostCSS 8

## Testing

All React projects use React Testing Library and Jest:
```bash
npm test           # Interactive test runner
npm test -- --coverage  # Run with coverage report
```

## Important Notes

- The startrek-gallery project has placeholder API endpoints (`https://api.example.com/startrek-images`) that need to be replaced with actual endpoints
- The carparts project expects an image at `/public/images/car.jpeg` for the interactive diagram
- The startrek-website uses an older version of react-scripts (3.0.1) while startrek-gallery uses 5.0.1
