"use client";

import { ChatUserCard, getUsers } from "@/entities/user";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useChat } from "../../model/hooks/useChat";
const UserListQuery: React.FC = () => {
  const { data: users } = useSuspenseQuery({
    queryKey: ["pets"],
    queryFn: getUsers,
    staleTime: 1000,
    retry: false,
  });

  const { selectedUserId, setSelectedUserId } = useChat();

  return (
    <div className="flex flex-col h-[100%] bg-gray-200">
      {users.map((user) => (
        <ChatUserCard
          key={user.id}
          user={user}
          selected={user.id === selectedUserId}
          onClick={() => setSelectedUserId(user.id)}
        />
      ))}
    </div>
  );
};

export default UserListQuery;
