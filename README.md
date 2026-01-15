# MyExperiments

A multi-project monorepo for experimental React and Next.js applications, organized using the **"Essential Root"** organization method.

## 🎯 What This Is

This repository serves as a clean, organized workspace for multiple independent experimental projects. Each project maintains its own dependencies, configuration, and (where applicable) GitHub repository.

## 📁 Repository Structure

```
MyExperiments/
├── README.md                      # You are here
├── CLAUDE.md                      # AI assistant guidance
│
├── ACTIVE PROJECTS
│   ├── startrek-website/          # React + styled-components demo
│   ├── startrek-gallery/          # React Router + Axios gallery
│   ├── carparts/                  # Next.js 14 drag-and-drop diagram
│   ├── mkproject/                 # Project scaffolding utility ⭐
│   ├── HVAC_ideas/                # Multi-agent HVAC assistant
│   ├── simcity-threejs-clone/     # Three.js SimCity clone
│   ├── weatherAppDemo/            # React weather app with Vite
│   └── opencode/                  # Docker development environment
│
└── Archive/
    ├── Personal/                  # Personal projects
    ├── ExperimentalProjects/      # Inactive/experimental projects
    ├── Media/                     # Images and screenshots
    ├── ZipArchives/               # Compressed archives
    ├── Guides/                    # Cross-project procedures
    └── Learning/                  # Learning materials

```

## 🚀 Active Projects

### Frontend Projects

- **[startrek-website](./startrek-website/)** - Demonstrates styled-components theming with a Star Trek theme
  - React 18.3.1, styled-components 6.1.11

- **[startrek-gallery](./startrek-gallery/)** - Image gallery with routing
  - React 18.3.1, React Router DOM 6.24.1, Axios 1.7.2

- **[carparts](./carparts/)** - Interactive drag-and-drop car parts diagram
  - Next.js 14.2.5, TypeScript, Tailwind CSS

- **[weatherAppDemo](https://github.com/sergeville/weatherAppDemo)** - Weather app with geolocation
  - React 19.2.3, Vite 7.3.1, OpenWeatherMap API

- **[simcity-threejs-clone](https://github.com/sergeville/simcity-threejs-clone)** - Three.js-based SimCity clone
  - Three.js, WebGL

### Development Tools

- **[mkproject](https://github.com/sergeville/mkproject)** ⭐ - Project scaffolding utility
  - Creates new projects with automatic git initialization
  - Supports React, Next.js, Node.js, Python, and more
  - [See mkproject README](./mkproject/README.md)

### Backend/Infrastructure Projects

- **[HVAC_ideas](https://github.com/sergeville/HVAC_ideas)** - Multi-agent HVAC technical assistant
  - CrewAI, Python, LLM integration

- **[opencode](https://github.com/opencode-ai/opencode)** - Docker-based development environment
  - Docker, containerized development tools

## 🛠️ Quick Start

Each project is independent. Navigate to any project directory and follow its README:

```bash
# Example: Start the weather app
cd weatherAppDemo
npm install
npm run dev
```

### Using mkproject

Create new projects instantly:

```bash
mkproject my-new-app
# Choose from: Plain, Node.js, React, Next.js, TypeScript, Python
```

See [mkproject documentation](./mkproject/README.md) for details.

## 📋 Organization Method

This repository follows the **"Essential Root" Organization Method**:

### Principles

1. **Minimalist Root** - Only essential items in the root directory
2. **Project-Specific Docs** - Documentation lives with the code it describes
3. **Clear Archive** - Non-essential items organized by category
4. **Self-Contained Projects** - Each project is portable and independent

### Benefits

- ✅ Easy navigation - Active projects immediately visible
- ✅ Better maintainability - Docs stay in sync with code
- ✅ Clean structure - Clear separation of active vs archived
- ✅ Scalable - Easy to add/remove projects

See [CLEANUP_SUMMARY.md](./CLEANUP_SUMMARY.md) and [DOCS_REORGANIZATION_SUMMARY.md](./DOCS_REORGANIZATION_SUMMARY.md) for the reorganization history.

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - AI assistant guidance and repository overview
- **Project READMEs** - Each project has its own documentation
- **Archive/Guides/** - Cross-project methodologies and procedures
- **Archive/Learning/** - Learning materials and analyses

## 🔗 GitHub Repositories

Some projects maintain their own GitHub repositories:

- [mkproject](https://github.com/sergeville/mkproject) - Project scaffolding utility
- [HVAC_ideas](https://github.com/sergeville/HVAC_ideas) - Multi-agent HVAC assistant
- [simcity-threejs-clone](https://github.com/sergeville/simcity-threejs-clone) - Three.js SimCity
- [weatherAppDemo](https://github.com/sergeville/weatherAppDemo) - React weather app
- [opencode](https://github.com/opencode-ai/opencode) - Docker dev environment

## 🧪 Tech Stack Overview

**Frontend:**
- React 18+, Next.js 14
- Vite, Create React App
- styled-components, Tailwind CSS
- React Router, Axios

**Backend/Tools:**
- Python, CrewAI
- Docker, containerization
- OpenWeatherMap API
- Three.js

**Development:**
- Git, GitHub
- npm, pip
- VS Code
- TypeScript

## 📝 License

Each project may have its own license. See individual project directories for details.

## 🤝 Contributing

This is a personal experimental workspace. Individual projects may accept contributions - check their respective repositories.

---

**Created**: 2026-01-15
**Organization Method**: Essential Root (from HVAC_ideas project documentation)
**Maintained by**: [sergeville](https://github.com/sergeville)
