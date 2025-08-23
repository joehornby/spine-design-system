export type PaletteItem = { type: string; label: string; icon?: React.ReactNode };

export function NodePalette({ items }: { items: PaletteItem[] }) {
  return (
    <nav aria-label="Node palette" className="flex flex-col gap-1 p-2">
      {items.map((item) => (
        <button
          key={item.type}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("application/reactflow", item.type);
            e.dataTransfer.effectAllowed = "move";
          }}
          className="flex items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 dark:hover:bg-neutral-800"
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
