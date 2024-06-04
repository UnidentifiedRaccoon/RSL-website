# Use an official node runtime as a parent image
FROM node:20.13-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Set the command to run the app
CMD ["serve", "-s", "dist"]

# Expose port 5000
EXPOSE 3000
