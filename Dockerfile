# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that your Next.js app will run on/3000
EXPOSE 80

# Start the Next.js app
CMD ["npm", "start"]
