import { Server, WebSocket, WebSocketServer } from "ws";
import { ChatServices } from "../../core/services/chat.services";
import { Message } from "../../core/models/message.model";

export class ChatWebSocket {
  private clients = new Set<WebSocket>();
  private wss: WebSocketServer;

  constructor(private chatService: ChatServices) {
    this.wss = new Server(
      {
        port: 5001,
      },
      () => console.log("ChatWebSocket Server started on 5001 port")
    );

    this.setup();
  }

  private broadcast = (message: Message) => {
    const messageString = JSON.stringify(message);
    this.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(messageString);
      }
    });
  };

  private setup() {
    this.chatService = new ChatServices(
      this.chatService["chatRepository"],
      this.broadcast
    );

    this.wss.on("connection", (ws: WebSocket) => {
      console.log("Client connected");
      this.clients.add(ws);

      ws.on("message", async (data: string) => {
        try {
          console.log("Message has been gotten on server", data);
          const { username, content, event } = JSON.parse(data); // TO-DO: add type guard
          console.log(username, content, event);
          if (!username || !content) {
            ws.send(JSON.stringify({ error: "Invalid message format" }));
            return;
          }
          await this.chatService.sendMessage(username, content, event);
        } catch (error) {
          console.error("error", error);
          ws.send(JSON.stringify({ error: "Failed to parse message" }));
        }
      });

      ws.on("close", () => {
        console.log("Client disconnected");
        this.clients.delete(ws);
      });

      ws.on("error", (error) => {
        console.error("WebSocket error:", error);
        this.clients.delete(ws);
      });
    });
  }
}
