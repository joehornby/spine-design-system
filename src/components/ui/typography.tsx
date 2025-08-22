import { cn } from "@/lib/cn";

export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 {...props} className={cn("text-xl font-semibold", props.className)} />;
}
export function Text(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn("text-sm leading-6 text-gray-700 dark:text-gray-300", props.className)} />;
}
