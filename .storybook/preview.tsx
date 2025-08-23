import "../src/styles/tokens.css";
import "../src/app/globals.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="font-mono">
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
    a11y: { element: "#root" },
  },
};
export default preview;
