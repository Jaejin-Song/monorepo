import type { Meta, StoryObj } from "@storybook/vue3";

import { Button } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["primary", "ghost", "dashed"] },
    disabled: { control: "select", options: [false, true] },
    danger: { control: "select", options: [false, true] },
    size: { control: "select", options: ["large", "middle", "small"] },
    onClick: { action: "clicked" },
  },
  args: { disabled: false, danger: false, size: "middle" }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">button</Button>',
  }),
  args: {
    type: "primary",
  },
};
