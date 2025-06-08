import { ReactNode } from "react";
import { usePetCardContext } from "../../model/usePetCardContext";

type PetCardContentProps = {
  children: ReactNode;
  className?: string;
};

export const PetCardContent = ({
  children,
  className = "",
}: PetCardContentProps) => {
  usePetCardContext();

  return <div className={`p-4 ${className}`}>{children}</div>;
};
