import { cn } from '@/shared/lib'
import React from 'react'

const Group = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center", className)}
      {...props}
    />
  )
})
Group.displayName = "Group"

export default Group