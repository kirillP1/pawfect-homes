"use client";

import { WebSocketConnectionStatus } from "@/features/Chat/model/types/types";
import { useEffect, useRef, useState } from "react";

export const useWebSocket = (url: string) => {
  const [connectionStatus, setConnectionStatus] =
    useState<WebSocketConnectionStatus>("connecting");
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      setConnectionStatus("open");
    };

    ws.onclose = () => {
      setConnectionStatus("closed");
    };

    ws.onerror = () => {
      setConnectionStatus("closed");
      throw new Error("WebSocket connection failed");
    };

    return () => {
      ws.close();
    };
  }, [url]);

  return { wsRef, connectionStatus, setConnectionStatus };
};
