#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Starting deployment process..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install git first."
    exit 1
fi

echo "Cloning the repository..."
git clone git@github.com:Motakabbir/mod-muse-gallery.git
cd mod-muse-gallery

echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "Node is not installed. Installing NVM (Node Version Manager) and Node.js LTS..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    
    # Load NVM into the current shell session
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    
    nvm install 20 # Install Node.js v20 (LTS)
    nvm use 20
    nvm alias default 20
else
    echo "Node.js is already installed: $(node -v)"
fi

echo "Installing npm dependencies..."
npm install

echo "Building the project..."
npm run build

echo "--------------------------------------------------------"
echo "Deployment and build complete!"
echo ""
echo "To start the development server, run:"
echo "  cd mod-muse-gallery && npm run dev"
echo ""
echo "To preview the production build, run:"
echo "  cd mod-muse-gallery && npm run preview"
echo "--------------------------------------------------------"
