import { model, Schema } from "mongoose";
import { IMessageSchema } from "./MessageEntity.types";

const MessageSchema = new Schema<IMessageSchema>(
  {
    event: { type: String, required: true },
    username: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const MessageEntity = model<IMessageSchema>("Message", MessageSchema);
