'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormInputs, registerSchema } from '../schema';

interface UseRegisterFormProps {
  submitRegister: (credentials: RegisterFormInputs) => Promise<void>;
  onSuccess?: () => void;
}

export function useRegisterForm({ submitRegister, onSuccess }: UseRegisterFormProps) {
  const form = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      await submitRegister(data);
      onSuccess?.();
    } catch (err) {
      console.error(err);
    }
  };

  return { form, onSubmit };
}