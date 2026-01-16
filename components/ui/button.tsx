import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-[Inter]",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--bg-brand))] text-[hsl(var(--text-on-brand))] hover:bg-[hsl(var(--bg-brand))]/90 border border-[hsl(var(--border-brand))]",
        destructive:
          "bg-[hsl(var(--bg-danger))] text-[hsl(var(--text-on-danger))] hover:bg-[hsl(var(--bg-danger))]/90 border border-[hsl(var(--border-danger))]",
        outline:
          "border border-[hsl(var(--border-brand))] bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        subtle: "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-default))] hover:bg-[hsl(var(--bg-secondary))]/90 border border-[hsl(var(--border-default))]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 rounded-lg px-2 text-sm",
        lg: "h-11 rounded-lg px-4 text-base",
        icon: "h-8 w-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
