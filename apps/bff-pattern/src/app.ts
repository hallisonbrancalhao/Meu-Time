import express from 'express';
import routes from './routes';
import cors from 'cors';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.express.use(cors());
    this.middleware();
    this.routes();
  }

  public middleware(): void {
    this.express.use(express.json());
  }

  public routes(): void {
    this.express.use(routes);
  }
}
export default new App().express;
