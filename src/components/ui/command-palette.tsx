import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { cn } from "@/lib/cn";
import { useEffect } from "react";

export function CommandPalette({
  open,
  onOpenChange,
  onSelect,
  commands,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSelect: (id: string) => void;
  commands: { id: string; label: string; shortcut?: string }[];
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-24 w-[600px] -translate-x-1/2 rounded-md border border-black/10",
            "bg-white p-2 shadow-lg dark:border-white/10 dark:bg-neutral-900"
          )}
        >
          <Command label="Command Menu" shouldFilter>
            <Command.Input
              placeholder="Type a command…"
              className="w-full border-0 bg-transparent p-3 text-sm outline-none"
            />
            <Command.List className="max-h-80 overflow-auto">
              {commands.map((c) => (
                <Command.Item
                  key={c.id}
                  value={c.label}
                  onSelect={() => onSelect(c.id)}
                  className="cursor-default select-none px-3 py-2 text-sm aria-selected:bg-neutral-100 dark:aria-selected:bg-neutral-800"
                >
                  {c.label}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
