import type { Meta, StoryObj } from "@storybook/react";

import AddressDetails, { AddressDataType } from "./AddressDetails";

const defaultAddress: AddressDataType = {
  ipAddress: "192.212.174.101",
  location: "Brooklyn, NY, 10001",
  timezone: "UTC -05:00",
  isp: "SpaceX Starlink",
  latLon: [37.38605, -122.08385],
};

const meta: Meta<typeof AddressDetails> = {
  title: "AddressDetails",
  component: AddressDetails,
  tags: ["autodocs"],
  // argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AddressDetails>;

export const Filled: Story = {
  args: {
    address: defaultAddress,
  },
};

export const NoAddress: Story = {
  args: {
    address: null,
  },
};
export const Loading: Story = {
  args: {},
};
