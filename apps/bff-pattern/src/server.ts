import app from './app';

export class Server {
  public start() {
    try {
      const port = process.env.PORT || 3333;
      const host = process.env.API_HOST || 'localhost';

      app.listen(port as number, host, async () => {
        console.log(`✅ Backend server started at ${host}:${port}`);
      });
    } catch (err) {
      console.error('Starting server Error', err);
    }
  }
}
