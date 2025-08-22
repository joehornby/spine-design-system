import { cn } from "@/lib/cn";

export function Chip({
  children,
  color = "default",
  className,
}: {
  children: React.ReactNode;
  color?: "default" | "success" | "warning" | "danger";
  className?: string;
}) {
  const palette = {
    default:
      "bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-100",
    success:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    warning:
      "bg-yellow-100 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-200",
    danger:
      "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  }[color];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        palette,
        className
      )}
    >
      {children}
    </span>
  );
}
