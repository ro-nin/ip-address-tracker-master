import type { Meta, StoryObj } from "@storybook/react";

import DataDisplayer, { DataSectionType } from "./DataDisplayer";
import { AddressDataType } from "../sharedLogic/AddressDataType";

const defaultAddress: AddressDataType = {
  ipAddress: "192.212.174.101",
  location: "Brooklyn, NY, 10001",
  timezone: "UTC -05:00",
  isp: "SpaceX Starlink",
  latLon: [37.38605, -122.08385],
};

const sections: Array<DataSectionType> = [
  { label: "IP ADDRESS", value: defaultAddress?.ipAddress },
  { label: "LOCATION", value: defaultAddress?.location },
  {
    label: "TIMEZONE",
    value: defaultAddress && `UTC ${defaultAddress?.timezone}`,
  },
  { label: "ISP", value: defaultAddress?.isp },
];

const meta: Meta<typeof DataDisplayer> = {
  title: "AddressDetails",
  component: DataDisplayer,
  tags: ["autodocs"],
  // argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DataDisplayer>;

export const WithData: Story = {
  args: {
    data: sections,
  },
};

export const WithoutData: Story = {
  args: { data: null },
};
export const Loading: Story = {
  args: {},
};
