import { usePetCardContext } from '../modal/usePetCardContext'

export const PetCardInfo = () => {
  const { pet } = usePetCardContext()

  return (
    <>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{pet.name}</h3>
      </div>
      <p className="text-gray-600 text-sm mt-1">{pet.breed}</p>
      <p className="text-gray-500 text-sm mt-2">{pet.age} years old</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-medium">${pet.adoptionFee}</span>
      </div>
    </>
  );
};