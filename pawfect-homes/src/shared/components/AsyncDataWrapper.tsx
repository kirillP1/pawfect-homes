import { ErrorBoundary } from "react-error-boundary";
import { Suspense, ReactNode } from "react";

type Props = {
  children: ReactNode;
  loadingFallback?: ReactNode;
  errorFallback?: ReactNode | ((props: FallbackProps) => ReactNode);
};

type FallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export function AsyncDataWrapper({
  children,
  loadingFallback = <div>Loading...</div>,
  errorFallback = <div>Error!</div>,
}: Props) {
  return (
    <ErrorBoundary 
      fallbackRender={
        typeof errorFallback === 'function' 
          ? errorFallback 
          : () => errorFallback
      }
    >
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}