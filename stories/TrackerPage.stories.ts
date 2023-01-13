import { Meta, StoryObj } from "@storybook/react";
import { AddressDataType } from "./AddressDetails";
import TrackerPage from "./TrackerPage";
import { rest } from "msw";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { GeoLocResultType } from "../sharedLogic/geolocate";

const defaultAddress: GeoLocResultType = {
  address: {
    ipAddress: "192.212.174.101",
    location: "Brooklyn, NY, 10001",
    timezone: "UTC -05:00",
    isp: "SpaceX Starlink",
    latLon: [37.38605, -122.08385],
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement); //error causing line
    console.log(canvas);
    await userEvent.type(canvas.getByTestId("inputText"), "111.111.111.111");
    await userEvent.click(canvas.getByTestId("button"));
    await expect(canvas.getByText("Tokyo")).toBeInTheDocument();
  },
};

export const UnreachableGeolocAPI: Story = {
  args: {
    initialAddress: { error: { code: "500", message: "mocked error" } },
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
    initialAddress: {},
  },
};
