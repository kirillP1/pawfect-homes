"use client";

import { ChatProvider } from "../model/context/ChatProvider";
import ChatWithSelectedUser from "./ChatWithSelectedUser/ChatWithSelectedUser";
import { UserListPanel } from "./UserList/UserListPanel";

const ChatWithUsers: React.FC = () => {
  return (
    <ChatProvider>
      <div className="flex h-[100%]">
        <div className="flex-1/5 h-[100%]">
          <UserListPanel />
        </div>
        <div className="flex-4/5">
          <ChatWithSelectedUser />
        </div>
      </div>
    </ChatProvider>
  );
};

export default ChatWithUsers;
