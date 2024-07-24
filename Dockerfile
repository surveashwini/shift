FROM node:14-alpine

# Setting the working directory in the container
WORKDIR /Shift

# Copying package.json and package-lock.json to the container
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying the rest of the application code to the container
COPY . .

# Exposing the port that the app runs on
EXPOSE 8080

# Defining the command to run the app
CMD ["npm", "start"]
