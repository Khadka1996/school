import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
