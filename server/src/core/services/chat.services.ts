import { ChatMongoRepositoryImpl } from "../../infrastructure/db/repository/chat/ChatMongoRepositoryImpl";
import { Message } from "../models/message.model";
import { ChatRepository } from "../repositories/ChatRepository/ChatRepository";

export class ChatServices {
  constructor(
    private readonly chatRepository: ChatRepository,
    private readonly broadcast: (message: Message) => void
  ) {}

  async sendMessage(
    username: string,
    content: string,
    event: string
  ): Promise<Message> {
    const message: Message = {
      id: Math.random().toString(36).slice(2),
      event,
      username,
      content,
    };
    await this.chatRepository.saveMessage(message);
    this.broadcast(message);
    return message;
  }

  async getMessageHistory(): Promise<Message[]> {
    return this.chatRepository.getMessages();
  }
}

const chatsServices = new ChatServices(new ChatMongoRepositoryImpl(), () => {});

export default chatsServices;
