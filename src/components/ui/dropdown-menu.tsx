import * as DM from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/cn";

export function Dropdown({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <DM.Root>
      <DM.Trigger asChild>{trigger}</DM.Trigger>
      <DM.Portal>
        <DM.Content
          className={cn(
            "min-w-[200px] rounded-md border border-black/5 bg-white p-1 shadow-lg",
            "dark:border-white/10 dark:bg-neutral-900 outline-none"
          )}
          align="start"
        >
          {children}
        </DM.Content>
      </DM.Portal>
    </DM.Root>
  );
}

export const DropdownItem = (props: React.ComponentProps<typeof DM.Item>) => (
  <DM.Item
    {...props}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded px-2 py-1.5 text-sm",
      "text-neutral-900 dark:text-neutral-100 outline-none",
      "focus:bg-neutral-100 dark:focus:bg-neutral-800",
      props.className
    )}
  />
);
