import { Document, Types } from "mongoose";

export interface IPetSchema extends Document {
  name: string;
  species: string;
  breed?: string;
  age: number;
  gender: string;
  adoptionFee: number;
  imageUrl?: string;
  description?: string;
  shelterId: Types.ObjectId;
  isAdopted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
