import { Schema, model } from "mongoose";
import { IPetSchema } from "./PetEntity.types";

const PetSchema = new Schema<IPetSchema>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    species: {
      type: String,
      required: true,
      trim: true,
    },
    breed: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
      trim: true,
    },
    adoptionFee: {
      type: Number,
      required: true,
      min: 0,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    shelterId: {
      type: Schema.Types.ObjectId,
      ref: "Shelter",
      required: true,
    },
    isAdopted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

PetSchema.index({ shelterId: 1 });

export const PetEntity = model<IPetSchema>("Pet", PetSchema);
