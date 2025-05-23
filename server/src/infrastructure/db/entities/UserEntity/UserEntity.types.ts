import { Document } from 'mongoose';

export interface IUserSchema extends Document {
  email: string;
  password: string;
	isActivated: boolean;
	activationLink?: string;
  createdAt: Date;
  updatedAt: Date;
}