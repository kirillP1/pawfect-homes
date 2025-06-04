"use client";

import { ChatFormInputs } from "../types/shema";
import { SendChatMessage } from "../types/types";
import { WebSocketConnectionStatus } from "../types/types";

export const useSendChatMessage = (
  wsRef: React.MutableRefObject<WebSocket | null>,
  username: string,
  connectionStatus: WebSocketConnectionStatus
) => {
  const sendMessage = ({ content }: ChatFormInputs) => {
    if (!content.trim() || connectionStatus !== "open" || !wsRef.current)
      return;
    const message: SendChatMessage = {
      username,
      content,
      event: "something",
    };
    console.log("message", message);
    wsRef.current.send(JSON.stringify(message));
  };

  return { sendMessage };
};
