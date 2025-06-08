"use client";

import { Chat } from "@/features/Chat";
import { useChat } from "../../model/hooks/useChat";

const ChatWithSelectedUser: React.FC = () => {
  const { selectedUserId } = useChat();

  return <Chat chatRoomId={selectedUserId} />;
};

export default ChatWithSelectedUser;
