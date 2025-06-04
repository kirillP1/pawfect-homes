import { Types } from "mongoose";
import { Pet } from "../../../../core/models/pets.model";
import { AddPetDto } from "../../../../core/repositories/PetsRepository/dtos/AddPet/AddPet.dto";
import { PetRepository } from "../../../../core/repositories/PetsRepository/PetsRepository";
import { PetEntity } from "../../entities/PetEntity/PetEntity.schema";
import { UpdatePetDto } from "../../../../core/repositories/PetsRepository/dtos/UpdatePet/UpdatePet.dto";
import { PetMapper } from "../../mappers/PetMapper/PetMapper";

export class PetsMongoRepositoryImpl implements PetRepository {
  async add(dto: AddPetDto): Promise<Pet> {
    const entity = await PetEntity.create({
      ...dto,
      shelterId: new Types.ObjectId(dto.shelterId),
    });
    return PetMapper.toDomain(entity);
  }

  async update(dto: UpdatePetDto): Promise<Pet> {
    const { id, ...input } = dto;
    const entity = await PetEntity.findByIdAndUpdate(id, input, {
      new: true,
      runValidators: true,
    }).select(
      "name species breed age gender adoptionFee imageUrl description shelterId isAdopted createdAt updatedAt"
    );

    if (!entity) {
      throw new Error(`Pet with id ${id} not found`);
    }

    return PetMapper.toDomain(entity);
  }

  async getAll(): Promise<Pet[]> {
    const entities = await PetEntity.find().select(
      "name species breed age gender adoptionFee imageUrl description shelterId isAdopted createdAt updatedAt"
    );
    return entities.map(PetMapper.toDomain);
  }

  async getById(id: string): Promise<Pet> {
    const entity = await PetEntity.findById(id).select(
      "name species breed age gender adoptionFee imageUrl description shelterId isAdopted createdAt updatedAt"
    );

    if (!entity) {
      throw new Error(`Pet with id ${id} not found`);
    }

    return PetMapper.toDomain(entity);
  }

  async remove(id: string): Promise<Pet> {
    const entity = await PetEntity.findByIdAndDelete(id).select(
      "name species breed age gender adoptionFee imageUrl description shelterId isAdopted createdAt updatedAt"
    );

    if (!entity) {
      throw new Error(`Pet with id ${id} not found`);
    }

    return PetMapper.toDomain(entity);
  }
}
