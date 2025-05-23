'use client';

import { FormCompound, InputCompound } from '@/shared/ui/form';
import { Button } from '@/shared/ui/button';
import { useRegisterForm } from '../../model/hooks/useRegisterForm'
import { cn } from '@/shared/lib'
import { RegisterFormInputs } from '../../model/schema'

interface IProps {
  submitRegister: (credentials: RegisterFormInputs) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  className?: string;
  onSuccess?: () => void;
}

export function RegisterForm({ submitRegister, isLoading, error, className, onSuccess }: IProps) {
  const { form, onSubmit } = useRegisterForm({ submitRegister, onSuccess });

  return (
    <FormCompound {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-4', className)}
      >
        <FormCompound.Field
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormCompound.Item>
              <FormCompound.Label>Username</FormCompound.Label>
              <FormCompound.Control>
                <InputCompound.Group>
                  <InputCompound
                    placeholder="Username"
                    {...field}
                  />
                </InputCompound.Group>
              </FormCompound.Control>
              <FormCompound.Message/>
            </FormCompound.Item>
          )}
        />

        <FormCompound.Field
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormCompound.Item>
              <FormCompound.Label>Email</FormCompound.Label>
              <FormCompound.Control>
                <InputCompound.Group>
                  <InputCompound
                    placeholder="Email"
                    type="email"
                    {...field}
                  />
                </InputCompound.Group>
              </FormCompound.Control>
              <FormCompound.Message/>
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
              <FormCompound.Message/>
            </FormCompound.Item>
          )}
        />

        <FormCompound.Field
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormCompound.Item>
              <FormCompound.Label>Confirm password</FormCompound.Label>
              <FormCompound.Control>
                <InputCompound.Group>
                  <InputCompound
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                  />
                </InputCompound.Group>
              </FormCompound.Control>
              <FormCompound.Message/>
            </FormCompound.Item>
          )}
        />

        {error && <FormCompound.Message>{error}</FormCompound.Message>}

        <Button isLoading={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </FormCompound>
  );
}