export const UserListErrorFallback = ({
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => (
  <div className="text-red-500 text-center">
    <p>Something went wrong</p>
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={resetErrorBoundary}
    >
      Retry
    </button>
  </div>
);
