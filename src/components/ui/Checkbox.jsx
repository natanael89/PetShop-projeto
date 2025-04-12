import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";


const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                "peer h-4 w-4 shrink-0 rounded-sm border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
                <Check className="h-4 w-4" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
});

export default Checkbox;