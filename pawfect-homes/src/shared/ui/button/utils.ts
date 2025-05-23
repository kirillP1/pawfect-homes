import { tv } from 'tailwind-variants'
import { ButtonSize, ButtonVariant } from './types'

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  
  variants: {
    variant: {
      [ButtonVariant.PRIMARY]: 'bg-blue-600 text-white hover:bg-blue-700',
      [ButtonVariant.SECONDARY]: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      [ButtonVariant.DANGER]: 'bg-red-600 text-white hover:bg-red-700',
    },
    size: {
      [ButtonSize.SM]: 'px-3 py-1.5 text-sm',
      [ButtonSize.MD]: 'px-4 py-2 text-base',
      [ButtonSize.LG]: 'px-6 py-3 text-lg',
    },
  },
  
  defaultVariants: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MD,
  },
});