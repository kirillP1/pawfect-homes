"use client";

import { AsyncDataWrapper } from "@/shared/components/AsyncDataWrapper";
import { useChat } from "../../model/hooks/useChat";
import ChatInputForm from "../ChatInputForm/ChatInputForm";
import ChatMessagesList from "../ChatMessagesList/ChatMessagesList";
import ChatUsernameInput from "../ChatUsernameInput/ChatUsernameInput";
import ChatErrorFallback from "../ChatErrorFallback/ChatErrorFallback";

export const Chat = () => {
  const { username, setUsername, connectionStatus, messages, sendMessage } =
    useChat();

  return (
    <AsyncDataWrapper
      loadingFallback={<div className="text-center">Connecting to chat...</div>}
      errorFallback={({ error, resetErrorBoundary }) => (
        <ChatErrorFallback
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 bg-gray-100">
        <div className="mb-4">
          <ChatUsernameInput
            username={username}
            setUsername={setUsername}
            connectionStatus={connectionStatus}
          />
        </div>
        <ChatMessagesList messages={messages} />
        <div className="mt-4">
          <ChatInputForm
            connectionStatus={connectionStatus}
            sendMessage={sendMessage}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">Status: {connectionStatus}</p>
      </div>
    </AsyncDataWrapper>
  );
};
