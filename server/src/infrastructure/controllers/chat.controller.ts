import { Request, Response } from "express";
import { ChatServices } from "../../core/services/chat.services";

export class ChatController {
  constructor(readonly chatServices: ChatServices) {
    // Bind methods to ensure `this` is correct in Express routes
    this.getMessages = this.getMessages.bind(this);
  }

  async getMessages(req: Request, res: Response) {
    try {
      const messages = await this.chatServices.getMessageHistory();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve messages" });
    }
  }
}
