import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
       className={cn(
        "h-12 w-full rounded-xl",
        "border border-border",
        "bg-muted/40",
        "px-4 text-sm",
        "placeholder:text-muted-foreground/70",
        "transition-all duration-200",
        "focus:border-primary",
        "focus:bg-background",
        "focus:ring-4 focus:ring-primary/10",
        "outline-none",
        "disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
