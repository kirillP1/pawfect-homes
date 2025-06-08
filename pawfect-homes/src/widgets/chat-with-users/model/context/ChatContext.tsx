import { createContext } from "react";

interface ChatContextType {
  selectedUserId: string | undefined;
  setSelectedUserId: (id: string) => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);
