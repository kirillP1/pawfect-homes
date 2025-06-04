"use client";

import { useRegister } from "../../model/hooks/useRegister";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const RegisterFormTabItem = () => {
  const {
    handleSubmit: submitRegister,
    isLoading: isRegisterLoading,
    error: registerError,
  } = useRegister();

  return (
    <RegisterForm
      submitRegister={submitRegister}
      isLoading={isRegisterLoading}
      error={registerError}
    />
  );
};
