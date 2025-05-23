export type IPetSpecies = 'dog' | 'cat' | 'bird' | 'other'
export type IPetGender = 'male' | 'female'; 

export interface IPet {
  id: string;
  name: string;
  species: IPetSpecies;
  breed: string;
  age: number;
  gender: IPetGender;
  adoptionFee: number;
  imageUrl: string;
  description?: string; 
  shelterId: string;
  isAdopted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

