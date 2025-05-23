import { Types } from 'mongoose';
import { Pet } from '../../../../core/models/pets.model';
import { PetEntity } from '../../entities/PetEntity/PetEntity.schema';
import { IPetSchema } from '../../entities/PetEntity/PetEntity.types'
import { DbMapper } from '../DbMapper'



export class PetMapper implements DbMapper<Pet, IPetSchema> {
  /**
   * Converts a MongoDB entity to a domain Pet model
   * @param entity The MongoDB pet entity
   * @returns Domain Pet model
   * @throws Error if entity is null or undefined
   */
  static toDomain(entity: IPetSchema): Pet {
    if (!entity) throw new Error('Entity cannot be null or undefined');
    if (!entity._id) throw new Error('Entity must have an _id');

    return new Pet(
      String(entity._id),
      entity.name,
      entity.species,
      entity.age,
      entity.gender,
      entity.adoptionFee,
      String(entity.shelterId),
      entity.isAdopted,
      entity.createdAt,
      entity.updatedAt,
      entity.breed,
      entity.imageUrl,
      entity.description
    );
  }

  /**
   * Converts a domain Pet model to a MongoDB entity
   * @param domain The domain Pet model
   * @returns MongoDB entity (IPetSchema)
   * @throws Error if domain model is null or undefined
   */
  static toEntity(domain: Pet): IPetSchema {
    if (!domain) throw new Error('Domain model cannot be null or undefined');
    if (!domain.shelterId) throw new Error('ShelterId cannot be null or undefined');

    return new PetEntity({
      _id: domain.id ? new Types.ObjectId(domain.id) : undefined,
      name: domain.name,
      species: domain.species,
      age: domain.age,
      gender: domain.gender,
      adoptionFee: domain.adoptionFee,
      shelterId: new Types.ObjectId(domain.shelterId),
      isAdopted: domain.isAdopted,
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt,
      breed: domain.breed,
      imageUrl: domain.imageUrl,
      description: domain.description
    });
  }

  // Instance methods that delegate to static methods to satisfy the interface
  toDomain(entity: IPetSchema): Pet {
    return PetMapper.toDomain(entity);
  }

  toEntity(domain: Pet): IPetSchema {
    return PetMapper.toEntity(domain);
  }
}