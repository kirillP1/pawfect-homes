import { Types } from "mongoose";
import {
  CreatePetInput,
  UpdatePetInput,
} from "../../infrastructure/types/pets.types";
import { PetRepository } from "../repositories/PetsRepository/PetsRepository";
import { PetsMongoRepositoryImpl } from "../../infrastructure/db/repository/pets/PetsMongoRepositoryImpl";
import { UpdatePetDto } from "../repositories/PetsRepository/dtos/UpdatePet/UpdatePet.dto";
import { AddPetDto } from "../repositories/PetsRepository/dtos/AddPet/AddPet.dto";
import { Pet } from "../models/pets.model";
import {
  BadRequestErrors,
  NotFoundError,
  ValidationError,
} from "../errors/app-error";

export class PetsServices {
  constructor(readonly petRepository: PetRepository) {}

  async getPets(): Promise<Pet[]> {
    const pets = await this.petRepository.getAll();
    return pets;
  }

  async getPetById(id: string): Promise<Pet> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestErrors("Invalid pet ID");
    }

    const pet = await this.petRepository.getById(id);
    if (!pet) {
      throw new NotFoundError("Pet not found");
    }
    return pet;
  }

  async createPet(input: CreatePetInput, userId: string): Promise<Pet> {
    if (!Types.ObjectId.isValid(input.shelterId)) {
      throw new BadRequestErrors("Invalid shelter ID");
    }

    const inputDto = new AddPetDto(
      input.name,
      input.species,
      input.age,
      input.gender,
      input.adoptionFee,
      input.shelterId,
      input.breed,
      input.imageUrl,
      input.description
    );
    // Placeholder: Validate user can manage shelter
    const pet = await this.petRepository.add(inputDto);
    return pet;
  }

  async updatePet(
    id: string,
    input: UpdatePetInput,
    userId: string
  ): Promise<Pet> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestErrors("Invalid pet ID");
    }

    const updateDto = new UpdatePetDto(
      id,
      input.name,
      input.species,
      input.age,
      input.gender,
      input.adoptionFee,
      input.isAdopted,
      input.breed,
      input.imageUrl,
      input.description
    );
    // Placeholder: Validate user can manage shelter
    const pet = await this.petRepository.update(updateDto);

    if (!pet) {
      throw new NotFoundError("Pet not found");
    }

    return pet;
  }

  async deletePet(id: string, userId: string): Promise<void> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestErrors("Invalid pet ID");
    }

    //s Placeholder: Validate user can manage shelter
    const pet = await this.petRepository.remove(id);

    if (!pet) {
      throw new NotFoundError("Pet not found");
    }
  }
}

const petsServices = new PetsServices(new PetsMongoRepositoryImpl());

export default petsServices;
