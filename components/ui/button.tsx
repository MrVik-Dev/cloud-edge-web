import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: `
          bg-primary
          text-primary-foreground
          border border-primary/20
          hover:bg-primary/90
        `,

        outline: `
          border
          border-input
          bg-background
          hover:bg-accent
          hover:text-accent-foreground
        `,

        secondary: `
          bg-secondary
          text-secondary-foreground
          hover:bg-secondary/80
        `,

        ghost: `
          hover:bg-accent
          hover:text-accent-foreground
        `,

        destructive: `
          bg-destructive
          text-destructive-foreground
          hover:bg-destructive/90
        `,

        link: `
          text-primary
          underline-offset-4
          hover:underline
        `,
      },

      size: {
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-4",
        default: "h-10 px-4 py-2",
        lg: "h-11 px-6",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
