import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  colorHex?: string;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, colorHex, ...props }, ref) => {
    const style =
      colorHex != null
        ? {
            borderColor: colorHex,
            boxShadow: `0 0 16px ${colorHex}33`
          }
        : undefined;

    return (
      <div
        ref={ref}
        style={style}
        className={cn(
          "inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-xs font-medium tracking-wide text-slate-100 shadow-sm",
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

