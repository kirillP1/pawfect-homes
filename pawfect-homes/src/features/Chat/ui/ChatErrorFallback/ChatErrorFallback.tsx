interface IProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ChatErrorFallback: React.FC<IProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="text-red-500 text-center">
      <p>Error: {error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={resetErrorBoundary}
      >
        Reconnect
      </button>
    </div>
  );
};

export default ChatErrorFallback;
