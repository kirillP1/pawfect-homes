import { Message } from "../../../../core/models/message.model";
import { ChatRepository } from "../../../../core/repositories/ChatRepository/ChatRepository";
import { MessageEntity } from "../../entities/MessageEntity/MessageEntity.schema";
import { MessageMapper } from "../../mappers/MessageMapper/MessageMapper";

export class ChatMongoRepositoryImpl implements ChatRepository {
  async saveMessage(message: Message): Promise<void> {
    console.log("Message saved", message);
    await MessageEntity.create(message);
  }

  async getMessages(): Promise<Message[]> {
    const entities = await MessageEntity.find();
    return entities.map(MessageMapper.toDomain);
  }
}
