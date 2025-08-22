import * as TP from "@radix-ui/react-tooltip";
export const TooltipProvider = TP.Provider;
export function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <TP.Root>
      <TP.Trigger asChild>{children}</TP.Trigger>
      <TP.Portal>
        <TP.Content
          sideOffset={8}
          className="rounded bg-black px-2 py-1 text-xs text-white"
        >
          {content}
          <TP.Arrow className="fill-black" />
        </TP.Content>
      </TP.Portal>
    </TP.Root>
  );
}
