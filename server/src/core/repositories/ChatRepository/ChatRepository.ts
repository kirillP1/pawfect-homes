import { Message } from "../../models/message.model";

export interface ChatRepository {
  saveMessage(message: Message): Promise<void>;
  getMessages(): Promise<Message[]>;
}
