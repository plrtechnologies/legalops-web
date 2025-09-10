# Use an official Node.js image as a base image
From node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json 
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .
#running the file
CMD ["npm", "start"]
