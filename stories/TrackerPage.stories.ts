import { Meta, StoryObj } from "@storybook/react";
import { AddressDataType } from "./AddressDetails";
import TrackerPage from "./TrackerPage";
import { rest } from "msw";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
  // argTypes: {},
};
export default meta;
type Story = StoryObj<typeof TrackerPage>;
export const WithAddress: Story = {
  args: {
    initialAddress: defaultAddress,
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement); //error causing line
  // },
};

export const UnreachableGeolocAPI: Story = {
  args: {
    initialAddress: null,
  },
  parameters: {
    msw: {
      handlers: [
        rest.get(/^(https:\/\/geo\.ipify\.org)/, (req, res, ctx) => {
          return res(ctx.status(500));
        }),
      ],
    },
  },
};
export const PendingGeolocation: Story = {
  args: {
    initialAddress: undefined,
  },
};
