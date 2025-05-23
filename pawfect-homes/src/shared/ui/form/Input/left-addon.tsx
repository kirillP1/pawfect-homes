import { cn } from '@/shared/lib'
import React from 'react'

const LeftAddon = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"flex items-center h-9 px-3 bg-muted rounded-l-md border border-r-0 border-input text-muted-foreground",
				className
			)}
			{...props}
		/>
	)
})
LeftAddon.displayName = "LeftAddon"

export default LeftAddon