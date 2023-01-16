import { Meta, StoryObj } from "@storybook/react";
import { AddressDataType } from "./AddressDetails";
import TrackerPage from "./TrackerPage";
import { rest } from "msw";
import { within, userEvent, screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { GeoLocResultType } from "../sharedLogic/geolocate";

const geoIpifyResponseExample = {
  ip: "8.8.8.8",
  location: {
    country: "US",
    region: "California",
    city: "Mountain View",
    lat: 37.38605,
    lng: -122.08385,
    postalCode: "94035",
    timezone: "-08:00",
    geonameId: 5375480,
  },
  domains: [
    "lsshn.duckdns.org",
    "luetopia.duckdns.org",
    "www.uvideogaming.com",
    "accurate-semarang.com",
    "bkidrsrt.cf",
  ],
  as: {
    asn: 15169,
    name: "GOOGLE",
    route: "8.8.8.0/24",
    domain: "https://about.google/intl/en/",
    type: "Content",
  },
  isp: "Google LLC",
};

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
export const EmptyToSuccess: Story = {
  args: {
    initialAddress: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    console.log(canvas);
    await userEvent.type(
      canvas.getByTestId("inputText"),
      "8.8.8.8",
       {
        delay: 10,
      }
    );
    await userEvent.click(canvas.getByTestId("button"));
    await sleep(1000);
    await expect(canvas.getByTestId("ISPValue")).toHaveTextContent(
      "Google LLC"
    );
  },
  parameters: {
    msw: {
      handlers: [
        rest.get(/^(https:\/\/geo\.ipify\.org)/, (req, res, ctx) => {
          return res(ctx.json(geoIpifyResponseExample));
        }),
      ],
    },
  },
};

// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
