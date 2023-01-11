import type { Meta, StoryObj } from "@storybook/react";
import { AddressData } from "./AddressDetails";
import MapView from "./MapView";

const defaultAddress: AddressData = {
  ipAddress: "192.212.174.101",
  location: "Brooklyn, NY, 10001",
  timezone: "UTC -05:00",
  isp: "SpaceX Starlink",
};

const meta: Meta<typeof MapView> = {
  title: "MapView",
  component: MapView,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MapView>;

export const WithAddress: Story = {
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
