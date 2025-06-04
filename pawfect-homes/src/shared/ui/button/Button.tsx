import { ReactNode } from "react";
import { ButtonSize, ButtonType, ButtonVariant } from "./types";
import { buttonVariants } from "./utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: ButtonType;
  isLoading?: boolean;
}

// extract isLoading && <Loader2 className="animate-spin" /> from component because it is bad for Opened-Closed principle

export const Button = ({
  children,
  variant,
  size,
  className = "",
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin" />}
      {children}
    </button>
  );
};
