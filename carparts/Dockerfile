# Use the official Node.js image with a compatible version.
FROM node:20-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install dependencies (both production and development).
RUN npm install

# Copy local code to the container image (initial copy).
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]