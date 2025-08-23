import * as MB from "@radix-ui/react-menubar";
import { cn } from "@/lib/cn";

export const Menubar = MB.Root;
export const MenubarMenu = MB.Menu;
export const MenubarTrigger = (p: React.ComponentProps<typeof MB.Trigger>) => (
  <MB.Trigger
    {...p}
    className={cn(
      "rounded px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800",
      p.className
    )}
  />
);
export const MenubarContent = (p: React.ComponentProps<typeof MB.Content>) => (
  <MB.Content
    {...p}
    className={cn(
      "min-w-[220px] rounded-md border border-black/5 bg-white p-1 shadow-lg dark:border-white/10 dark:bg-neutral-900",
      p.className
    )}
  />
);
export const MenubarItem = (p: React.ComponentProps<typeof MB.Item>) => (
  <MB.Item
    {...p}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded px-2 py-1.5 text-sm",
      "focus:bg-neutral-100 dark:focus:bg-neutral-800",
      p.className
    )}
  />
);
