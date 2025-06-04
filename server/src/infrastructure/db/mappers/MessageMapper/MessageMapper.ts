import { Message } from "../../../../core/models/message.model";
import { MessageEntity } from "../../entities/MessageEntity/MessageEntity.schema";
import { IMessageSchema } from "../../entities/MessageEntity/MessageEntity.types";
import { DbMapper } from "../DbMapper";

export class MessageMapper implements DbMapper<Message, IMessageSchema> {
  /**
   * Converts a MongoDB entity to a domain Message model
   * @param entity The MongoDB message entity
   * @returns Domain Message model
   * @throws Error if entity is null or undefined
   */
  static toDomain(entity: IMessageSchema): Message {
    if (!entity) throw new Error("Entity cannot be null or undefined");
    if (!entity._id) throw new Error("Entity must have an _id");

    const message: Message = {
      id: entity.id,
      event: entity.event,
      username: entity.username,
      content: entity.content,
      createdAt: entity?.createdAt,
      updatedAt: entity?.updatedAt,
    };

    return message;
  }

  /**
   * Converts a domain Message model to a MongoDB entity
   * @param domain The domain Message model
   * @returns MongoDB entity (IMessageSchema)
   * @throws Error if domain model is null or undefined
   */
  static toEntity(domain: Message): IMessageSchema {
    if (!domain) throw new Error("Domain model cannot be null or undefined");
    if (!domain.id) throw new Error("Message id cannot be null or undefined");

    return new MessageEntity({
      id: domain.id,
      username: domain.username,
      message: domain.content,
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt,
    });
  }

  // Instance methods that delegate to static methods to satisfy the interface
  toDomain(entity: IMessageSchema): Message {
    return MessageMapper.toDomain(entity);
  }

  toEntity(domain: Message): IMessageSchema {
    return MessageMapper.toEntity(domain);
  }
}
