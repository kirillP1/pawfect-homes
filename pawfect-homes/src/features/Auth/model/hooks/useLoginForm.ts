'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormInputs, loginSchema } from '../schema';

interface UseLoginFormProps {
  submitLogin: (credentials: LoginFormInputs) => Promise<void>;
  onSuccess?: () => void;
}

export function useLoginForm({ submitLogin, onSuccess }: UseLoginFormProps) {
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    await submitLogin(data);
    onSuccess?.();
  };

  return { form, onSubmit };
}