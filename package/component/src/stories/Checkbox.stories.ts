import type { Meta, StoryObj } from "@storybook/vue3";

import { Checkbox } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Checkbox",
  component: Checkbox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean", options: [false, true] },
    checked: { control: "boolean", options: [false, true] },
    onClick: { action: "clicked" },
  },
  args: { disabled: false, checked: false }, // default value
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args">체크해주세요</Checkbox>',
  }),
};
