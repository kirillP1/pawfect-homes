"use client";

import { RegisterFormInputs } from "../types/schema";
import { useAuthStore } from "../auth-store";
import { useMutation } from "@tanstack/react-query";

export function useRegister() {
  const { registration } = useAuthStore();

  const mutation = useMutation({
    mutationFn: registration,
    onError: (error: Error) => {
      console.error("Register failed:", error?.message);
    },
  });

  const handleSubmit = async (credentials: RegisterFormInputs) => {
    await mutation.mutateAsync(credentials);
  };

  return {
    handleSubmit,
    isLoading: mutation.isPending,
    error: mutation.error?.message || null,
  };
}
