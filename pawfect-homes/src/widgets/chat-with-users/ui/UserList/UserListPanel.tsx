"use client";

import { AsyncDataWrapper } from "@/shared/components/AsyncDataWrapper";
import { UserListErrorFallback } from "./UserListErrorFallback";
import UserListQuery from "./UserListQuery";

export const UserListPanel = () => {
  return (
    <AsyncDataWrapper errorFallback={UserListErrorFallback}>
      <UserListQuery />
    </AsyncDataWrapper>
  );
};
