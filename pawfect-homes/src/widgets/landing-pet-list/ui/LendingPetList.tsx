'use client';

import { PetCard } from '@/entities/pet';
import { IPet } from '@/shared/api'

interface IProps {
  pets: IPet[]
}

export const LendingPetList = ({ pets }: IProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} className="max-w-sm">
          <PetCard.Image />
          <PetCard.Content>
            <PetCard.Info />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Adopt Now
            </button>
          </PetCard.Content>
        </PetCard>
      ))}
    </div>
  );
};