# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the app dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your app will run
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]
