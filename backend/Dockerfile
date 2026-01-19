# Base Image
FROM node:18-alpine

#Set working directory inside the container
WORKDIR /app

#Copy dependency files first
COPY package*.json ./

#install dependencies
RUN npm install

#copy application source code
COPY . .

#Expose the port the app runs on
EXPOSE 3000

#start the server
CMD ["npm", "start"]