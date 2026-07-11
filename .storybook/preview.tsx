import type { Preview } from "@storybook/nextjs-vite";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    nextjs: { appDirectory: true },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "ocean",
      values: [
        { name: "ocean", value: "#061420" },
        { name: "deep", value: "#03111f" },
      ],
    },
    a11y: { test: "todo" },
  },
};

export default preview;
