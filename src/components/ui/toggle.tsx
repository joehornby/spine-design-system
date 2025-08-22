import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "@/lib/cn";

export function Toggle({
  children,
  className,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root>) {
  return (
    <TogglePrimitive.Root
      className={cn(
        "inline-flex select-none items-center justify-center rounded-md border px-2 py-1 text-sm",
        "data-[state=on]:bg-accent data-[state=on]:text-white",
        "hover:bg-gray-100 dark:hover:bg-neutral-800",
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive.Root>
  );
}
