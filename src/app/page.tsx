import { H2, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { FlowCanvas } from "@/components/flow/FlowCanvas";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 p-6">
      <H2>Flow editor demo</H2>
      <Text>Drag nodes from the left palette onto the canvas. Right-click a node for actions.</Text>
      <div className="flex items-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <FlowCanvas />
    </main>
  );
}
