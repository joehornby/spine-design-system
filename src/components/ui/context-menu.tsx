import * as CM from "@radix-ui/react-context-menu";
import { cn } from "@/lib/cn";

export function ContextMenu({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <CM.Root>
      <CM.Trigger asChild>{children}</CM.Trigger>
      <CM.Portal>
        <CM.Content
          className={cn(
            "min-w-[200px] rounded-md border border-black/5 bg-white p-1 shadow-lg",
            "dark:border-white/10 dark:bg-neutral-900 outline-none",
            "will-change-[opacity,transform]"
          )}
        >
          {content}
        </CM.Content>
      </CM.Portal>
    </CM.Root>
  );
}

export function ContextMenuItem({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect?: () => void;
}) {
  return (
    <CM.Item
      className={cn(
        "flex cursor-default select-none items-center gap-2 rounded px-2 py-1.5 text-sm",
        "text-neutral-900 dark:text-neutral-100 outline-none",
        "focus:bg-neutral-100 dark:focus:bg-neutral-800"
      )}
      onSelect={onSelect}
    >
      {children}
    </CM.Item>
  );
}
