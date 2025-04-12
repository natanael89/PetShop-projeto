import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

const buttonVariants = {
  default: "bg-green-600 hover:bg-green-700 text-white",
  outline: "bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  ghost: "bg-transparent hover:bg-green-600 text-green-600 hover:text-white",
};

const Button = React.forwardRef(({ className, variant= "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
          ref={ref}
          className={cn(
            "font-semibold py-2 px-4 flex items-center justify-center gap-2 rounded-lg transition-colors",
            buttonVariants[variant],
            className
          )}
          {...props}
        
        />
    )
})



export default Button;