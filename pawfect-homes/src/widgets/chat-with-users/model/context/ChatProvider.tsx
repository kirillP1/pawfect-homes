import { ReactNode, useState } from "react";
import { ChatContext } from "./ChatContext";

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>();

  return (
    <ChatContext.Provider value={{ selectedUserId, setSelectedUserId }}>
      {children}
    </ChatContext.Provider>
  );
};
