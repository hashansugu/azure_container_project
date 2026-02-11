# Use the official Node.js 18 image based on Alpine Linux for a lightweight and efficient environment.
From node:18-alpine 

# Set the working directory inside the container to /app. This is where the application code will be copied and executed.
WORKDIR /app 

# Copy files from your computer to the container. The package.json and package-lock.json files are copied to the current working directory in the container.
COPY package*.json ./ 

# Install the dependencies defined in package.json. The --production flag ensures that only production dependencies are installed, which helps reduce the size of the final image.
RUN npm install --production 

# Copy the rest of the application code from your computer to the container. This includes all files and directories in the current directory (.) to the working directory in the container (/app).
COPY . . 

# Expose port 3000 to allow external access to the application. This is the port that the application will listen on.
EXPOSE 3000 

#Command tto run when the container starts. It tells the container to execute the command node start, which will start the application defined in the start script of package.json.
CMD ["node", "start"]  