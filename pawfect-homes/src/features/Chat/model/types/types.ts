export interface ChatMessage {
  id: string;
  username: string;
  content: string;
  event: string;
  createdAt: string;
  updatedAt: string;
}

export type SendChatMessage = Omit<
  ChatMessage,
  "id" | "createdAt" | "updatedAt"
>;

export type WebSocketConnectionStatus = "connecting" | "open" | "closed";

export interface WebSocketError {
  error: string;
}
