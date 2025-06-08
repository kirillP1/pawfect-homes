import Image from "next/image";
import { usePetCardContext } from "../../model/usePetCardContext";

export const PetCardImage = () => {
  const { pet } = usePetCardContext();

  return (
    <Image
      src={pet.imageUrl}
      alt={`Adopt ${pet.name}`}
      className="w-full h-48 object-cover"
      width={300}
      height={200}
      priority
    />
  );
};
