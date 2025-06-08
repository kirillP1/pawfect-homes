import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PetCardContext } from "./PetCardContext";
import { PetCardImage } from "./PetCardImage";
import { PetCardContent } from "./PetCardContent";
import { PetCardInfo } from "./PetCardInfo";
import { PetCardErrorFallback } from "./PetCardErrorFallback";
import { IPet } from "../../model/types";

type PetCardProps = {
  pet: IPet;
  children?: ReactNode;
  className?: string;
};

export const PetCard = ({ pet, children, className = "" }: PetCardProps) => {
  return (
    <ErrorBoundary
      key={pet.id}
      FallbackComponent={PetCardErrorFallback}
      onError={(error) => console.error(`Error in PetCard ${pet.id}:`, error)}
    >
      <PetCardContext.Provider value={{ isInsidePetCard: true, pet }}>
        <div
          className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}
        >
          {children}
        </div>
      </PetCardContext.Provider>
    </ErrorBoundary>
  );
};

PetCard.Image = PetCardImage;
PetCard.Info = PetCardInfo;
PetCard.Content = PetCardContent;
