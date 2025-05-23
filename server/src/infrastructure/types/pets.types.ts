export interface CreatePetInput {
  name: string;
  species: string;
  breed?: string;
  age: number;
  gender: string;
  adoptionFee: number;
  imageUrl?: string;
  description?: string;
  shelterId: string;
}

export interface UpdatePetInput {
  name?: string;
  species?: string;
  breed?: string;
  age?: number;
  gender?: string;
  adoptionFee?: number;
  imageUrl?: string;
  description?: string;
  isAdopted?: boolean;
}