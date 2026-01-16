import * as React from "react"
import { cn } from "@/lib/utils"

const AspectRatio = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { ratio?: string | number }
>(({ ratio = "16 / 9", className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("overflow-hidden", className)}
    style={{ aspectRatio: ratio as any }}
    {...props}
  />
))
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
