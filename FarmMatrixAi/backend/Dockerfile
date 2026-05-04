FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend source code
COPY backend .

# Expose the port your Express app runs on
EXPOSE 5000

# Command to run your backend server
CMD ["node", "index.js"]