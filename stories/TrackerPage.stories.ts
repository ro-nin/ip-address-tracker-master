import { Meta, StoryObj } from "@storybook/react";
import { AddressDataType } from "./AddressDetails";
import TrackerPage from "./TrackerPage";

const defaultAddress: AddressDataType = {
  ipAddress: "192.212.174.101",
  location: "Brooklyn, NY, 10001",
  timezone: "UTC -05:00",
  isp: "SpaceX Starlink",
  latLon: [37.38605, -122.08385],
};

const meta: Meta<typeof TrackerPage> = {
  title: "TrackerPage",
  component: TrackerPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TrackerPage>;

export const WithAddress: Story = {
  args: {
    address: defaultAddress,
  },
};
export const FailedInitialGeolocation: Story = {
  args: {
    address: null,
  },
};

export const PendingGeolocation: Story = {
  args: {
    address: undefined,
  },
};
