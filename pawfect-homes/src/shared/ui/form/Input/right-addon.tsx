import { cn } from '@/shared/lib'
import React from 'react'

const RightAddon = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"flex items-center h-9 px-3 bg-muted rounded-r-md border border-l-0 border-input text-muted-foreground",
				className
			)}
			{...props}
		/>
	)
})
RightAddon.displayName = "RightAddon"

export default RightAddon