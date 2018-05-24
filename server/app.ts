import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { Routes } from './routes/user';
import mongoose = require('mongoose');

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl = `${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  public clientAppUrl = `${process.env.CLIENT_APP_URL}:${process.env.CLIENT_APP_PORT}`;

  constructor() {
    this.app = express();
    this.configApp();
    this.configHeaders();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private configApp(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // serving static files
    if (process.env.NODE_ENV === 'production') {
      this.app.use(express.static(path.join(__dirname, '/../client')));
    }
  }

  private configHeaders(): void {
    this.app.use((req, res, next) => {
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', this.clientAppUrl);

      // Request methods you wish to allow
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
      );

      // Request headers you wish to allow
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
      );

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);

      // Pass to next layer of middleware
      next();
    });
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}

export default new App().app;
