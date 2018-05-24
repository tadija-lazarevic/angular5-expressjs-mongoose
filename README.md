## Stack

This is basic skeleton project for Angular5, MongoDB and Mongoose written in Typescript. There is no much 3rd party libraries so it is good fit for starter project.

## Build

```bash
# Install dependencies
npm install

# Start mongod service
mongod --port=12345 (or whichever port you are using) --dbpath=/path/to/yourdb

# start server
npm run start

# Application should start on your default browser on localhost:4200 address. 
# If everything works ok you should see : "It is alive!" message" 

```
# Config

Applications url client and server, port numbers and database url can be configured in `nodemon.json` file.


## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


## Inspired by these 2 great repos

https://github.com/dalenguyen/rest-api-node-typescript/

https://github.com/vladotesanovic/angular2-express-starter
