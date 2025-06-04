import { Document } from "mongoose";

export interface IMessageSchema extends Document {
  username: string;
  content: string;
  event: string;
  createdAt: Date;
  updatedAt: Date;
}
