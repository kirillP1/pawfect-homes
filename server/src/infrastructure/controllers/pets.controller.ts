import { NextFunction, Request, Response} from 'express';
import { PetsServices } from '../../core/services/pets.services';
import { CreatePetInput, UpdatePetInput } from '../types/pets.types';

export class PetsController {
  constructor(readonly petsServices: PetsServices) {
    // Bind methods to ensure `this` is correct in Express routes
    this.getPets = this.getPets.bind(this);
    this.getPetById = this.getPetById.bind(this);
    this.createPet = this.createPet.bind(this);
    this.updatePet = this.updatePet.bind(this);
    this.deletePet = this.deletePet.bind(this);
  }

  async getPets(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const pets = await this.petsServices.getPets();
      res.status(200).json({ pets });
    } catch (error) {
      next(error);
    }
  }

  async getPetById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const pet = await this.petsServices.getPetById(id);
      res.status(200).json({ pet });
    } catch (error) {
      next(error);
    }
  }

  async createPet(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const input: CreatePetInput = req.body;
      const userId = 'placeholder-user-id'; // Replace with req.user.id after JWT
      const pet = await this.petsServices.createPet(input, userId);
      res.status(201).json({ pet });
    } catch (error) {
      next(error);
    }
  }

  async updatePet(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const input: UpdatePetInput = req.body;
      const userId = 'placeholder-user-id'; // Replace with req.user.id after JWT
      const pet = await this.petsServices.updatePet(id, input, userId);
      res.status(200).json({ pet });
    } catch (error) {
      next(error);
    }
  }

  async deletePet(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const userId = 'placeholder-user-id'; // Replace with req.user.id after JWT
      await this.petsServices.deletePet(id, userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}