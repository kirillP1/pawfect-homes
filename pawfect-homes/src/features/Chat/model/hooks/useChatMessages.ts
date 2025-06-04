"use client";

import { useEffect, useState } from "react";
import { ChatMessage, WebSocketError } from "../types/types";

export const useChatMessages = (
  wsRef: React.MutableRefObject<WebSocket | null>
) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    if (!wsRef.current) return;

    const handleMessage = (event: MessageEvent) => {
      try {
        console.log("event", event);
        const data = JSON.parse(event.data);
        if ("error" in data) {
          throw new Error((data as WebSocketError).error);
        }
        setMessages((prev) => [...prev, data as ChatMessage]);
      } catch (error) {
        throw error; // Caught by AsyncDataWrapper
      }
    };

    wsRef.current.onmessage = handleMessage;

    return () => {
      if (wsRef.current) {
        wsRef.current.onmessage = null;
      }
    };
  }, [wsRef]);

  return { messages, setMessages };
};
