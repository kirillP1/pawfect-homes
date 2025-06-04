import { ChatMessage } from "../../model/types/types";

interface IProps {
  messages: ChatMessage[];
}

const ChatMessagesList: React.FC<IProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-white rounded shadow">
      {messages.map((msg) => (
        <div key={msg.id} className="mb-2">
          <span className="font-bold">{msg.username}</span>
          <span className="text-gray-500 text-sm ml-2">
            {new Date(msg.createdAt).toLocaleTimeString()}
          </span>
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatMessagesList;
