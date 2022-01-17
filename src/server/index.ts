import bodyParser from "body-parser";
import express from "express";
import http from "http";

import { setRouting } from "./routes";

export default class Server {
  private static _instance: Server;
  private httpServer: http.Server;

  public app: express.Application;
  public port: number;

  private constructor() {
    this.app = express();
    this.port = 3000; // TODO: Make this port dynamic
    this.httpServer = new http.Server(this.app);
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  public init(callback: () => void): void {
    setRouting();
    this.setBodyParser();
    this.httpServer.listen(this.port, callback);
  }

  private setBodyParser(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }
}