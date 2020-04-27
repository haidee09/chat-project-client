FROM node:10

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

# Install dependecies
RUN npm install

#Copy all the project
COPY . /app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]|