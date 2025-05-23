import { Pet } from '../../models/pets.model'
import { AddPetDto } from './dtos/AddPet/AddPet.dto'
import { UpdatePetDto } from './dtos/UpdatePet/UpdatePet.dto'

export interface PetRepository {
	add(dto: AddPetDto): Promise<Pet>;
	getById(id: string): Promise<Pet>;
	getAll(): Promise<Pet[]>;
	remove(id: string): Promise<Pet>;
	update(dto: UpdatePetDto): Promise<Pet>;
}