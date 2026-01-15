#!/bin/bash

# mkproject - Project scaffolding tool
# Creates a new project with git, .gitignore, and optional framework setup
# Usage: mkproject <project-name>

mkproject() {
    if [ -z "$1" ]; then
        echo "Usage: mkproject <project-name>"
        return 1
    fi

    local project_name="$1"
    local project_path="$PWD/$project_name"

    # Check if directory already exists
    if [ -d "$project_path" ]; then
        echo "Error: Directory '$project_name' already exists!"
        return 1
    fi

    # Create project directory
    mkdir -p "$project_path"
    cd "$project_path"

    echo "Creating project: $project_name"
    echo ""

    # Initialize git repository
    git init
    echo "✓ Git repository initialized"

    # Create comprehensive .gitignore
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
venv/
env/
*.pyc
__pycache__/
.Python
pip-log.txt

# Build outputs
dist/
build/
*.egg-info/
.next/
out/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log

# Testing
coverage/
.nyc_output/
.pytest_cache/

# Misc
.cache/
.parcel-cache/
.vercel
EOF
    echo "✓ .gitignore created"

    # Prompt for project type
    echo ""
    echo "Select project type:"
    echo "1) Plain (git + .gitignore only)"
    echo "2) Node.js (npm init)"
    echo "3) React (Vite + React)"
    echo "4) Next.js (create-next-app with TypeScript)"
    echo "5) TypeScript Node (npm init + TypeScript)"
    echo "6) Python (venv + requirements.txt)"
    echo ""
    read -p "Enter choice [1-6]: " choice

    case $choice in
        1)
            echo "✓ Plain project created"
            ;;
        2)
            npm init -y
            echo "✓ Node.js project initialized"
            ;;
        3)
            npm create vite@latest . -- --template react
            echo "✓ React + Vite project created"
            echo ""
            echo "Next steps:"
            echo "  npm install"
            echo "  npm run dev"
            ;;
        4)
            npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
            echo "✓ Next.js project created"
            echo ""
            echo "Next steps:"
            echo "  npm run dev"
            ;;
        5)
            npm init -y
            npm install --save-dev typescript @types/node ts-node
            npx tsc --init
            echo "✓ TypeScript Node project initialized"
            echo ""
            echo "Next steps:"
            echo "  Create your .ts files"
            echo "  Run with: npx ts-node yourfile.ts"
            ;;
        6)
            python3 -m venv venv
            echo "flask" > requirements.txt
            echo "requests" >> requirements.txt

            # Create VS Code settings for Python
            mkdir -p .vscode
            cat > .vscode/settings.json << 'VSCODE_EOF'
{
    "python.defaultInterpreterPath": "${workspaceFolder}/venv/bin/python",
    "python.terminal.activateEnvironment": true
}
VSCODE_EOF
            echo "✓ Python project initialized"
            echo ""
            echo "Next steps:"
            echo "  source venv/bin/activate"
            echo "  pip install -r requirements.txt"
            ;;
        *)
            echo "Invalid choice. Creating plain project."
            ;;
    esac

    # Create initial README
    cat > README.md << README_EOF
# $project_name

Project created on $(date +%Y-%m-%d)

## Setup

[Add setup instructions here]

## Usage

[Add usage instructions here]
README_EOF
    echo "✓ README.md created"

    # Initial git commit
    git add .
    git commit -m "Initial commit: Project scaffolding"
    echo "✓ Initial commit created"

    echo ""
    echo "✅ Project '$project_name' created successfully!"
    echo "📂 Location: $project_path"

    # Open in VS Code if available
    if command -v code &> /dev/null; then
        echo ""
        read -p "Open in VS Code? [Y/n]: " open_vscode
        if [[ "$open_vscode" != "n" && "$open_vscode" != "N" ]]; then
            code .
            echo "✓ Opened in VS Code"
        fi
    fi
}

# If script is sourced, the function is available
# If script is executed directly, run the function with arguments
if [ "${BASH_SOURCE[0]}" != "${0}" ]; then
    # Being sourced, function is now available
    :
else
    # Being executed directly
    mkproject "$@"
fi
