import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        redButton:
          "border border-input text-[#f0eef7] bg-pink-600 font-bold hover:bg-accent hover:text-accent-foreground hover:text-[#9a49f2]",
        blueButton:
          "border border-input text-[#f0eef7] bg-indigo-600 font-bold hover:bg-accent hover:text-accent-foreground hover:text-[#9a49f2]",
        purpleButton:
          "border border-input text-[#f0eef7] bg-[#9a49f2]/75 font-bold hover:bg-accent hover:text-accent-foreground hover:text-[#9a49f2]",
        addButton:
          "border border-input text-[#f0eef7] font-bold bg-[#9a49f2]/75 hover:bg-accent hover:text-accent-foreground hover:text-[#9a49f2]",
        link: "text-[#f0eef7] font-bold underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 rounded-full px-3",
        second: "h-9 w-16 rounded-full px-3 mx-9",
        third: "m-3",
        fourth: "w-12 rounded",
      },
    },
    defaultVariants: {},
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
