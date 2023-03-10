import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "./SearchBar";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  // argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const WithoutText: Story = {
  args: {
    value: undefined,
  },
};

export const WithText: Story = {
  args: {
    value: "Some Text Inserted",
  },
};

export const WithLongText: Story = {
  args: {
    value:
      "Some Text Inserted Some Text Inserted Some Text Inserted Some Text Inserted Some Text Inserted Some Text Inserted",
  },
};

