"use client";

import { useMutation } from "@tanstack/react-query";
import { LoginFormInputs } from "../types/schema";
import { useAuthStore } from "../auth-store";

export function useLogin() {
  const { login } = useAuthStore();

  const mutation = useMutation({
    mutationFn: login,
    onError: (error: Error) => {
      console.error("Login failed:", error?.message);
    },
  });

  const handleSubmit = async (credentials: LoginFormInputs) => {
    await mutation.mutateAsync(credentials);
  };

  return {
    handleSubmit,
    isLoading: mutation.isPending,
    error: mutation.error?.message || null,
  };
}
