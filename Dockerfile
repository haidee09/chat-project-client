FROM node:10
RUN mkdir -p /app
WORKDIR /app
COPY . /app

# Install dependecies
RUN npm Install

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]