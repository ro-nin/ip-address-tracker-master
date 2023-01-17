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

const meta: Meta<typeof DataDisplayer> = {
  title: "DataDisplayer",
  component: DataDisplayer,
  tags: ["autodocs"],
  // argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DataDisplayer>;

const sections: Array<DataSectionType> = [
  { label: "IP ADDRESS", value: defaultAddress?.ipAddress },
  { label: "LOCATION", value: defaultAddress?.location },
  {
    label: "TIMEZONE",
    value: defaultAddress && ` ${defaultAddress?.timezone}`,
  },
  { label: "ISP", value: defaultAddress?.isp },
  { label: "Placeholder#1", value: defaultAddress?.ipAddress },
  { label: "Placeholder#2", value: defaultAddress?.location },
  {
    label: "Placeholder#3",
    value: defaultAddress && `${defaultAddress?.timezone}`,
  },
  { label: "Placeholder#4", value: defaultAddress?.isp },
];

export const WithFourSections: Story = {
  args: {
    data: sections.slice(0, 4),
  },
};
export const WithEightSections: Story = {
  args: {
    data: sections,
  },
};
export const WithOddSections: Story = {
  args: {
    data: sections.slice(0, 3),
  },
};
export const WithOddSectionsMultipleRow: Story = {
  args: {
    data: sections.slice(0, 5),
  },
};

export const WithoutData: Story = {
  args: { data: null },
};
export const Loading: Story = {
  args: {},
};
