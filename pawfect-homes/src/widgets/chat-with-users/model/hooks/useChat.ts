import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

// Custom hook for easier usage
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
