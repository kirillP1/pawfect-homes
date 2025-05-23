'use client';

import { ReactNode } from 'react';
import { AuthContext, useCheckAuth } from '@/features/Auth'



export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useCheckAuth()

  return (
    <AuthContext.Provider
      value={{ isLoading }}
    >
      {isLoading ? 'Checking if you are auth!' : children}
    </AuthContext.Provider>
  );
};


