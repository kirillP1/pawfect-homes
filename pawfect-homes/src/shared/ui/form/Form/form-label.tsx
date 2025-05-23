import * as LabelPrimitive from "@radix-ui/react-label"
import { Label } from '../Label/label'
import { useFormField } from './useFormField'
import { cn } from '@/shared/lib'

export function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}