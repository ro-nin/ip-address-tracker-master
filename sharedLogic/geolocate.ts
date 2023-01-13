import { AddressDataType } from "../stories/AddressDetails";

export type GeoLocResultType = {
  address?: AddressDataType;
  error?: GeoLocErrorType;
};

//mock error from server
export type GeoLocErrorType = {
  code: string;
  message: string;
};

export default async function geolocateAddress(
  ipToLocate?: string | undefined
): Promise<GeoLocResultType> {
  const apiKey = process.env.NEXT_PUBLIC_GEOIP_KEY;

  const geoLocateIpQuery = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}${
    ipToLocate ? "&ipAddress=" + ipToLocate : ""
  }`;
  return fetch(geoLocateIpQuery)
    .then((res) => {
      if (res.ok) return res.json();
      else {
        throw new Error(res.statusText);
      }
    })

    .then((data) => {
      console.log(data, "reached then");
      if (data.code !== undefined) {
        console.log(data.code, data.message);

        return { error: { code: data.code ?? "500", message: data.message } };
      }
      const address: AddressDataType = {
        ipAddress: data.ip,
        location: `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`,
        timezone: `${data.location.timezone}`,
        isp: data.isp,
        latLon: [data.location.lat, data.location.lng],
      };
      return { address };
    })
    .catch((err) => {
      console.error("catch: " + err);
      return { error: { code: err.code ?? "500", message: err.message } };
    });
}
