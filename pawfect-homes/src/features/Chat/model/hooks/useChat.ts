"use client";

import { useWebSocket } from "@/shared/hooks/useWebSocket";
import { useChatMessages } from "./useChatMessages";
import { useChatUsername } from "./useChatUsername";
import { useSendChatMessage } from "./useSendChatMessage";

interface IParams {
  chatRoomId?: string;
}

export const useChat = ({ chatRoomId }: IParams) => {
  if (chatRoomId) console.log("chatRoomId", chatRoomId);

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
