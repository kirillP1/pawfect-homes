"use client";

import { FormCompound, InputCompound } from "@/shared/ui/form";
import { Button } from "@/shared/ui/button";
import { useLoginForm } from "../../model/hooks/useLoginForm";
import { cn } from "@/shared/lib";
import { LoginFormInputs } from "../../model/types/schema";

interface IProps {
  submitLogin: (credentials: LoginFormInputs) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  className?: string;
  onSuccess?: () => void;
}

export function LoginForm({
  submitLogin,
  isLoading,
  error,
  className,
  onSuccess,
}: IProps) {
  const { form, onSubmit } = useLoginForm({ submitLogin, onSuccess });

  return (
    <FormCompound {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-4", className)}
      >
        <FormCompound.Field
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormCompound.Item>
              <FormCompound.Label>Email</FormCompound.Label>
              <FormCompound.Control>
                <InputCompound.Group>
                  <InputCompound placeholder="Email" type="email" {...field} />
                </InputCompound.Group>
              </FormCompound.Control>
              <FormCompound.Message />
            </FormCompound.Item>
          )}
        />

        <FormCompound.Field
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormCompound.Item>
              <FormCompound.Label>Password</FormCompound.Label>
              <FormCompound.Control>
                <InputCompound.Group>
                  <InputCompound
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                </InputCompound.Group>
              </FormCompound.Control>
              <FormCompound.Message />
            </FormCompound.Item>
          )}
        />

        {error && <FormCompound.Message>{error}</FormCompound.Message>}

        <Button isLoading={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </Button>
      </form>
    </FormCompound>
  );
}
