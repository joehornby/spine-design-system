import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const styles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:opacity-90 focus-visible:ring-accent",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-100",
        ghost:
          "bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-800 text-inherit",
      },
      size: { sm: "h-8 px-3", md: "h-9 px-4", lg: "h-10 px-5" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles> & { asChild?: boolean };

export function Button({ asChild, className, variant, size, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(styles({ variant, size }), className)} {...props} />;
}
