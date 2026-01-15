# Documentation Reorganization Summary

**Date**: 2026-01-15
**Principle**: Project-specific docs live with their projects

## Problem Identified

MyExperiments_Docs/ centralized documentation away from projects, causing:
- 🔴 Docs separated from code (hard to keep in sync)
- 🔴 Projects not self-contained
- 🔴 Violation of best practices

## Solution Applied

Moved all documentation to proper locations following the principle: **"Documentation lives with the code it describes"**

## Changes Made

### ❌ DELETED
- `MyExperiments_Docs/AGENTS.md` → Duplicate (already exists in HVAC_ideas/)

### 📦 PROJECT-SPECIFIC DOCS → Moved to Projects
- `SkillSet_instruction.md` → `Archive/ExperimentalProjects/full-stack-creator-and-doc-custodian/`
- `Understanding Agent Threads Framework.md` → `Archive/ExperimentalProjects/Agent-Threads/`
- `Hybrid LLM Gateway_ Local Context, Remote Processing.md` → `Archive/ExperimentalProjects/Hybrid_LLM/`

### 📚 CROSS-PROJECT GUIDES → Moved to Archive/Guides/
- `Comprehensive Error Tracking and Task Management for Test Failures.md` → `Archive/Guides/`

### 🎓 LEARNING MATERIALS → Moved to Archive/Learning/
- `video-analysis-dan-martell-ai-million.md` → `Archive/Learning/`
- `Marc.pdf` → `Archive/Learning/`

### 🗑️ REMOVED
- `MyExperiments_Docs/` directory (now empty, deleted)

## New Archive Structure

```
Archive/
├── Personal/                  # Personal projects
├── ExperimentalProjects/      # Experimental projects (each with their own docs)
│   ├── Agent-Threads/
│   ├── Hybrid_LLM/
│   ├── full-stack-creator-and-doc-custodian/
│   ├── Jake2/
│   ├── opus/
│   └── [others]
├── Media/                     # Images and screenshots
├── ZipArchives/               # Compressed archives
├── Guides/                    # Cross-project methodologies ✨ NEW
└── Learning/                  # Learning materials ✨ NEW
```

## Documentation Philosophy (Added to CLAUDE.md)

**Project-specific docs live with their projects.**

Each project should have:
- Its own README.md, CLAUDE.md, or documentation
- Docs in the same directory as the code
- No reliance on external documentation

Cross-project resources:
- `CLAUDE.md` - Repository-level AI guidance
- `Archive/Guides/` - Cross-project procedures
- `Archive/Learning/` - Learning materials

## Benefits

✅ **Self-contained projects** - Each project has all its documentation
✅ **Better sync** - Docs update with code changes
✅ **Portability** - Projects can be moved/shared easily
✅ **Clarity** - Clear separation between project docs and general resources
✅ **Best practices** - Follows industry-standard documentation patterns
