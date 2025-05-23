import { Schema, model } from 'mongoose';
import { IUserSchema } from './UserEntity.types'

const UserSchema = new Schema<IUserSchema>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isActivated: {
      type: Boolean,
      default: true, // Change to "false" when I will add activation by mail
    },
    activationLink: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

UserSchema.index({ username: 1 });

export const UserEntity = model<IUserSchema>('User', UserSchema);