import type { Meta, StoryObj } from "@storybook/react";
import { FlowCanvas } from "@/components/flow/FlowCanvas";

const meta: Meta<typeof FlowCanvas> = {
  title: "Flow/Canvas",
  component: FlowCanvas,
};
export default meta;
type Story = StoryObj<typeof FlowCanvas>;
export const Default: Story = {};
