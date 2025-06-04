"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatFormInputs, chatFormSchema } from "../types/shema";

interface UseChatInputFormProps {
  submit: (data: ChatFormInputs) => void;
  onSuccess?: () => void;
}

export function useChatInputForm({ submit, onSuccess }: UseChatInputFormProps) {
  const form = useForm<ChatFormInputs>({
    resolver: zodResolver(chatFormSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit: SubmitHandler<ChatFormInputs> = async (data) => {
    await submit(data);
    form.reset();
    onSuccess?.();
  };

  return { form, onSubmit };
}
