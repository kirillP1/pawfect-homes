'use client'

import { useState } from 'react';
import { RegisterFormInputs } from '../schema';

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (credentials: RegisterFormInputs) => {
    setIsLoading(true);
    try {
      // Replace with actual API call, e.g., await registerApi(credentials)
      console.log(credentials);
    } catch (err) {
      setError('Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, error };
}