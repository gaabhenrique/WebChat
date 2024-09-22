import express, { Application, response } from "express";
import http from "http";
import { Server } from "socket.io";

class App {
  private app: Application;
  private http: http.Server;
  private io: Server;
  private http_port: number;
  private socket_port: number;

  public constructor(_http_port: number, _socket_port: number) {
    this.app = express();
    this.app.use(express.static("src"));
    this.http = http.createServer(this.app);
    this.io = new Server(this.http);
    this.http_port = _http_port;
    this.socket_port = _socket_port;
    this.setupRoutes();
  }

  public listenServer() {
    this.http.listen(this.http_port, () => {
      console.log("Server is running on port " + this.http_port);
    });
  }

  public listenSocket() {
    this.io.on("connection", (socket) => {
      console.log(`User connected: ${socket.id}`);

      socket.on("message", (msg) => {
        this.io.emit("message", {
          msg: msg,
          id: socket.id,
        });
      });
    });
  }

  setupRoutes() {
    this.app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });
  }
}

const app = new App(3030, 3040);

app.listenServer();
app.listenSocket();
