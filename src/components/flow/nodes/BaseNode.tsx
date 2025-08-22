import { Handle, Position, type NodeProps } from "reactflow";
import { ContextMenu, ContextMenuItem } from "@/components/ui/context-menu";
import { Chip } from "@/components/ui/chip";

type Data = {
  title: string;
  tags?: string[];
  onDuplicate?: () => void;
  onDelete?: () => void;
};

export function BaseNode({ data }: NodeProps<Data>) {
  return (
    <ContextMenu
      content={
        <>
          <ContextMenuItem onSelect={data.onDuplicate}>Duplicate</ContextMenuItem>
          <ContextMenuItem onSelect={data.onDelete}>Delete</ContextMenuItem>
        </>
      }
    >
      <div
        className="rounded-md border border-black/10 bg-white/90 p-3 shadow dark:border-white/10 dark:bg-neutral-900/90 backdrop-blur"
        role="group"
        aria-label={`${data.title} node`}
      >
        <div className="mb-2 text-sm font-semibold">{data.title}</div>
        <div className="flex flex-wrap gap-1">
          {data.tags?.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <Handle type="target" position={Position.Left} className="!h-2 !w-2 !bg-accent" />
        <Handle type="source" position={Position.Right} className="!h-2 !w-2 !bg-accent" />
      </div>
    </ContextMenu>
  );
}
