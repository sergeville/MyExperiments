# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a multi-project monorepo containing experimental React and Next.js applications. Each project is independent with its own package.json and node_modules.

The repository follows the **"Essential Root" Organization Method** with a clean, minimalist structure:

### Directory Structure

```
MyExperiments/
├── CLAUDE.md                      # This file - AI guidance
│
├── ACTIVE PROJECTS (Root Level)
│   ├── startrek-website/          # React + styled-components
│   ├── startrek-gallery/          # React + Router + Axios
│   ├── carparts/                  # Next.js 14 + TypeScript
│   ├── mkproject/                 # Project scaffolding utility (git submodule)
│   ├── HVAC_ideas/                # HVAC multi-agent system
│   ├── simcity-threejs-clone/     # Three.js SimCity clone
│   ├── weatherAppDemo/            # React weather app
│   └── opencode/                  # Docker-based development environment
│
└── Archive/                       # Non-essential items (docs live with projects)
    ├── Personal/                  # Personal projects and documents
    ├── ExperimentalProjects/      # Experimental/inactive projects
    │   ├── Agent-Threads/         # (includes Understanding Agent Threads Framework.md)
    │   ├── Hybrid_LLM/            # (includes Hybrid LLM Gateway doc)
    │   ├── full-stack-creator-and-doc-custodian/  # (includes SkillSet_instruction.md)
    │   └── [other projects]
    ├── Media/                     # Images, screenshots, and media files
    ├── ZipArchives/               # Compressed archives
    ├── Learning/                  # Learning materials and video analyses
    └── Guides/                    # Cross-project guides and procedures
```

### Active Projects:
- **startrek-website**: A Create React App project demonstrating styled-components theming
- **startrek-gallery**: A Create React App project with React Router and Axios for image galleries
- **carparts**: A Next.js 14 TypeScript project with an interactive drag-and-drop car parts diagram
- **mkproject**: Project scaffolding utility (see Project Creation Tool section below)
- **HVAC_ideas**: Multi-agent HVAC technical assistant system
- **simcity-threejs-clone**: Three.js-based SimCity clone
- **weatherAppDemo**: React weather application with Vite
- **opencode**: Docker-based development environment

**Note**: This is NOT a workspace/monorepo setup. Each project must be developed independently by navigating to its directory.

### Documentation Philosophy

**Project-specific docs live with their projects.** Documentation should never be separated from the code it describes. This ensures:
- ✅ Docs stay in sync with code changes
- ✅ Each project is self-contained and portable
- ✅ Easy to find relevant documentation

**Cross-project resources:**
- `CLAUDE.md` (this file) - Repository-level AI guidance
- `Archive/Guides/` - Cross-project procedures and methodologies
- `Archive/Learning/` - Learning materials, video analyses, research

**Each project should have:**
- Its own README.md, CLAUDE.md, or similar documentation
- Docs in the same directory as the code they describe
- No reliance on external documentation repositories

## Project Creation Tool

The `mkproject` utility is available for creating new projects with automatic scaffolding.

### Usage

```bash
mkproject <project-name>
```

The script is automatically loaded in your shell via ~/.zshrc and is available as a command from anywhere.

### What mkproject Does

1. **Automatically runs `git init`** - Git initialization is built into the command
2. Creates a comprehensive `.gitignore` file suitable for Node.js/React/Next.js/Python projects
3. Offers 6 project types:
   - **Plain** - Git + .gitignore only
   - **Node.js** - npm init
   - **React** - Vite + React template
   - **Next.js** - create-next-app with TypeScript, Tailwind, App Router
   - **TypeScript Node** - npm init + TypeScript setup
   - **Python** - venv + VS Code configuration + requirements.txt
4. Creates an initial README.md
5. Makes an initial git commit
6. Automatically opens the project in VS Code if available

### Script Location

The mkproject utility is maintained in this repository:

- **Directory**: `/Users/sergevilleneuve/Documents/MyExperiments/mkproject/`
- **GitHub**: `https://github.com/sergeville/mkproject`
- **Loaded by**: `~/.zshrc` (sources the script automatically)

See the mkproject directory for full documentation and source code.

## Project-Specific Commands

### startrek-website
```bash
cd startrek-website
npm start          # Development server on http://localhost:3000
npm test           # Run tests in watch mode
npm run build      # Production build
```

**Architecture:**
- Uses styled-components for CSS-in-JS styling
- Theme properties accessed via `${({ theme }) => theme.property}` in styled components
- Theme defines colors (primary, secondary, background, text) and fonts (main, title)
- Single-page layout with Header, Main, Footer components defined as styled components
- react-icons library used for icon components (e.g., FaStar)

### startrek-gallery
```bash
cd startrek-gallery
npm start          # Development server on http://localhost:3000
npm test           # Run tests in watch mode
npm run build      # Production build
```

**Architecture:**
- React Router DOM v6 (package version 6.24.1, but uses v5 API with `Switch` and `component` prop)
- Component structure:
  - `HomePage`: Landing page component
  - `ImageGallery`: Displays grid of images fetched via Axios
  - `ImageDetail`: Shows individual image details using URL params
- API integration pattern: useEffect hooks with Axios for data fetching
- Routes: `/` (home), `/gallery` (gallery), `/gallery/:id` (detail)
- Navigation implemented with React Router's `Link` component

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
npm test                      # Interactive test runner in watch mode
npm test -- --coverage        # Run with coverage report
npm test -- --testPathPattern=<file>  # Run specific test file
npm test -- --testNamePattern=<pattern>  # Run tests matching pattern
```

In Next.js (carparts), testing is not configured by default. Tests would need to be set up separately.

## Important Notes

- The startrek-gallery project has placeholder API endpoints (`https://api.example.com/startrek-images`) that need to be replaced with actual endpoints
- The carparts project expects an image at `/public/images/car.jpeg` for the interactive diagram
- The startrek-website uses an older version of react-scripts (3.0.1) while startrek-gallery uses 5.0.1
