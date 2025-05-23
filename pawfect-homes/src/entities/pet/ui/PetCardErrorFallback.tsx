export const PetCardErrorFallback = ({ error }: { error: Error }) => (
  <div className="p-4 bg-red-100 text-red-700 rounded">
    <p>Failed to render pet: {error.message}</p>
  </div>
);