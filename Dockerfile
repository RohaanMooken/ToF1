# FROM php:apache
# COPY . /var/www/html/
# specify the node base image with your desired version node:<version>

# Use the official Node.js 14 image as the base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Set the command to start the Next.js application
CMD ["npm", "start"]