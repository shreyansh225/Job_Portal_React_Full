# Search for the version in - https://hub.docker.com/_/node/tags  and choose either -alpine or -slim
FROM node:20.12.1-alpine
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .

#--silent
RUN npm install  

# RUN npm install react-scripts@4.0.3 -g --silent
COPY . ./

EXPOSE 8000
EXPOSE 3000

# Create a shell script to run both npm commands
RUN echo '#!/bin/sh' > start.sh
RUN echo 'npm run dev-exposed &' >> start.sh
RUN echo 'npm run server ' >> start.sh


# Make the shell script executable
RUN chmod +x start.sh

# Specify the command to run your app
CMD ["./start.sh"]

# CMD ["npm", "run","server"]
# CMD ["npm", "run","dev"]
# "dev-exposed": "vite --host",   ( added to the package.json file in vite scripts)


# For React Image Creation: 
# First start the Docker Engine by opennig the Docker Desktop
# docker build -t job-front-container .
# docker build -t containername:tag

# For Running Container: 
# Used - docker run -p 3000:3000 -p 8000:8000 job-front-container
# Not used - docker run -it -p 3000:3000 containername:tag