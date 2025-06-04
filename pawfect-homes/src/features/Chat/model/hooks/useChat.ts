"use client";

import { useWebSocket } from "@/shared/hooks/useWebSocket";
import { useChatMessages } from "./useChatMessages";
import { useChatUsername } from "./useChatUsername";
import { useSendChatMessage } from "./useSendChatMessage";

export const useChat = () => {
  const { wsRef, connectionStatus } = useWebSocket("ws://localhost:5001");
  const { messages } = useChatMessages(wsRef);
  const { username, setUsername } = useChatUsername();
  const { sendMessage } = useSendChatMessage(wsRef, username, connectionStatus);

  return {
    username,
    setUsername,
    connectionStatus,
    messages,
    sendMessage,
  };
};
