import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-yellow-400 text-black border border-yellow-300 hover:bg-yellow-300 active:scale-[0.98]",
        glow:
          "bg-black/80 text-yellow-400 border border-yellow-500/60 hover:bg-yellow-400 hover:text-black hover:border-yellow-300 active:scale-[0.98] backdrop-blur-md",
        outline:
          "border border-yellow-500/50 bg-black/60 text-yellow-300 hover:bg-yellow-500/15 hover:border-yellow-400 hover:text-yellow-100 active:scale-[0.98]",
        secondary:
          "bg-neutral-900/90 text-yellow-400 border border-neutral-800 hover:border-yellow-500/60 hover:bg-neutral-800/90 active:scale-[0.98]",
        destructive:
          "bg-red-900/80 text-red-200 border border-red-700/60 hover:bg-red-800 shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]",
        ghost: "text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300",
        link: "text-yellow-400 underline-offset-4 hover:underline hover:text-yellow-300",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-2xl px-8 py-3.5 text-base",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
