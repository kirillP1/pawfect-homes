import { useContext } from "react";
import { PetCardContext } from "../ui/PetCard/PetCardContext";

export const usePetCardContext = () => {
  const context = useContext(PetCardContext);

  if (!context) {
    throw new Error("It must be used within a PetCard component");
  }

  return context;
};
